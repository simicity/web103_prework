import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qwsidikxfcqrhttojcup.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3c2lkaWt4ZmNxcmh0dG9qY3VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1NTM0ODgsImV4cCI6MjAwODEyOTQ4OH0.rBkZFj29fMt3DSWvim71m7Vcky3FNTWzwPuqyKdJqi4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);