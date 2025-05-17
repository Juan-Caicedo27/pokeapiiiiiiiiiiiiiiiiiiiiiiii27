import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://jodlvwchnkhqyhvkpbxd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvZGx2d2NobmtocXlodmtwYnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MzkxNzksImV4cCI6MjA2MzAxNTE3OX0.qrJCgzaFfgwaCB_a4vzrqtFn2zReXYgwa5eb8I4y3jA';
export const supabase = createClient(supabaseUrl, supabaseKey);