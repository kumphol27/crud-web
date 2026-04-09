const SUPABASE_URL = "https://cicvdydnrgrgjdpeufuc.supabase.co";
const SUPABASE_KEY = "sb_publishable_KRMgo0_VGMTqToKk-Ur-yQ_FUFOgXFm";

// ใช้ global จาก CDN
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// export ให้ทุกไฟล์ใช้
window.db = db;
window.SUPABASE_URL = SUPABASE_URL;
