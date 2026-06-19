// ممنوع وضع باسورد قاعدة البيانات فى الكود هذا فقط للشرح
//Database password
//6pF6UpBpGyIvaEMT

const SUPERBASE_URL = "https://xpfsvcriivscmhywpnpr.supabase.co";
const SUPERBASE_ANON_KEY = "sb_publishable_zP9Gfsg13JzG07TpVTsTkQ_17HUnRuk";

const supabaseClient = supabase.createClient(SUPERBASE_URL, SUPERBASE_ANON_KEY);

const balanceEL = document.getElementById("balance");
const amountInput = document.getElementById("amount-input");
const btnIncome = document.getElementById("btn-income");
const btnExpense = document.getElementById("btn-expense");

// داله لجلب البيانات من قاعدة البيانات

async function loadData() {
  let { data: wallet, erro } = await supabaseClient
    // جلب الرصيد
    .from("wallet")
    .select("balance")
    .single();

  if (wallet) {
    balanceEl.innerText = wallet.balance;
  }
}

loadData();
