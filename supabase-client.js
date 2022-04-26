import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ppqxcndctbrjxhyzsuyh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwcXhjbmRjdGJyanhoeXpzdXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA5Mzg4NzIsImV4cCI6MTk2NjUxNDg3Mn0.uqCWTVgy8I6-mK55wIU-7IRkaxefu4PCDctCWpk0a8s';

export const supabase = createClient(supabaseUrl, SUPABASE_KEY);