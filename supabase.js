const SUPABASE_URL = "https://cicvdydnrgrgjdpeufuc.supabase.co";
const SUPABASE_KEY = "sb_publishable_KRMgo0_VGMTqToKk-Ur-yQ_FUFOgXFm";

// 👇 ดึงจาก global object
const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// export ไปใช้
window.supabase = supabaseClient;
