import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabase_url = 'https://qkjmyyeolscwsbznpsjc.supabase.co';
const supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFram15eWVvbHNjd3Niem5wc2pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA1MzM3MDksImV4cCI6MTk2NjEwOTcwOX0.IPzYKhJJbutqD5U7_xzMEo4GboeOx94Lf-dGx0t13k0';
const supabase = createClient(supabase_url, supabase_key, {
  localStorage: AsyncStorage,
});

export default supabase;