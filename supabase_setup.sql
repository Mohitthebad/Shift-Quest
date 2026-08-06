-- Execute this script in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- 1. Create the inquiries table
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  title TEXT,
  practice TEXT,
  message TEXT
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS Policy to allow anonymous users to insert inquiries from the website form
CREATE POLICY "Allow public form submissions" 
  ON public.inquiries 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- 4. Grant access to public role for inserting
GRANT INSERT ON public.inquiries TO anon;
