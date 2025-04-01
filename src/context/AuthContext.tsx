
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

// Define the shape of our user profile data
export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  account_type: 'free' | 'pro' | 'enterprise';
  created_at: string;
}

// Define the shape of our auth context
interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock data for user profile
const MOCK_USER_PROFILE: UserProfile = {
  id: '123456789',
  email: 'user@example.com',
  full_name: 'Demo User',
  avatar_url: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Felix',
  account_type: 'pro',
  created_at: new Date().toISOString(),
};

// Auth context provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // Check for existing session on component mount
  useEffect(() => {
    // Set up auth state change listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        console.log('Auth state changed', event, newSession?.user?.email);
        setSession(newSession);
        setUser(newSession?.user ?? null);

        // If user logged in, fetch/set their profile
        if (newSession?.user) {
          // For now, we're using mock data
          // In a real app, you would fetch from database
          setTimeout(() => {
            setProfile({
              ...MOCK_USER_PROFILE,
              id: newSession.user.id,
              email: newSession.user.email || MOCK_USER_PROFILE.email
            });
          }, 0);
        } else {
          setProfile(null);
        }
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      if (currentSession?.user) {
        // Set mock profile data
        setProfile({
          ...MOCK_USER_PROFILE,
          id: currentSession.user.id,
          email: currentSession.user.email || MOCK_USER_PROFILE.email
        });
      }
      
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "Login failed",
          description: error.message,
          variant: "destructive",
        });
        throw error;
      }

      // Success
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
      });

      navigate('/dashboard');
    } catch (error) {
      console.error("Error during sign in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Sign up function
  const signUp = async (email: string, password: string, name: string) => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (error) {
        toast({
          title: "Registration failed",
          description: error.message,
          variant: "destructive",
        });
        throw error;
      }

      // Success (note: in production, email verification would typically be required)
      toast({
        title: "Account created",
        description: "Your account has been created successfully.",
      });
      
      navigate('/dashboard');
    } catch (error) {
      console.error("Error during sign up:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Sign out function
  const signOut = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        toast({
          title: "Sign out failed",
          description: error.message,
          variant: "destructive",
        });
        throw error;
      }

      // Success
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
      
      navigate('/');
    } catch (error) {
      console.error("Error during sign out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    profile,
    session,
    isLoading,
    signIn,
    signUp,
    signOut,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
