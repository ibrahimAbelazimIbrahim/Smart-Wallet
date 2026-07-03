// ممنوع وضع باسورد قاعدة البيانات فى الكود هذا فقط للشرح
//Database password
//6pF6UpBpGyIvaEMT

const SUPERBASE_URL = "https://xpfsvcriivscmhywpnpr.supabase.co";
const SUPERBASE_ANON_KEY = "sb_publishable_zP9Gfsg13JzG07TpVTsTkQ_17HUnRuk";

const supabaseClient = supabase.createClient(SUPERBASE_URL, SUPERBASE_ANON_KEY);

const balanceEl = document.getElementById("balance");
const amountInput = document.getElementById("amount-input");
const btnIncome = document.getElementById("btn-income");
const btnExpense = document.getElementById("btn-expense");
const historyList = document.getElementById("history-list");

// داله جلب الرصيد وسجل العمليات
async function loadData() {
  //  جلب البيانات من قاعدة البيانات
  let { data: wallet, erro1 } = await supabaseClient
    // جلب الرصيد
    .from("wallet")
    .select("balance")
    .single();

  if (wallet) {
    balanceEl.innerText = wallet.balance;
  }

  //  جلب سجل العلميات
  let { data: history, erro2 } = await supabaseClient
    // جلب السجل
    .from("history")
    .select("*")
    .order("id", { ascending: false });

  //  <ul id="history-list"></ul>
  //  historyList  as var
  // li

  if (history) {
    historyList.innerHTML = ""; //clean
    history.forEach((item) => {
      const li = document.createElement("li");
      li.innerText = `${item.type}: ${item.amount} ج.م`;
      historyList.appendChild(li);
    });
  }
}



loadData();
