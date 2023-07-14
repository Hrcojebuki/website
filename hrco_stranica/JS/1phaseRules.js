var prompts = [
    {
        id: "rule1.1",
        question: "What is a hard breach",
        answer: "<p>Hard breach means that you violated either the Daily Loss Limit or the Max Trailing Drawdown rule. Both rules constitute a hard breach. In the event you have a hard breach, you will fail the evaluation or lose your Funded account.</p>"
    },

    {
        id: "rule1.2",
        question: "How do you calculate Max Drawdown?",
        answer: `<p>Maximum drawdown is the maximum your account can drawdown before you hard breach your account.</p>
         <p>For 2-Phase accounts, when you open the account, your Max Drawdown is set at 8% of your starting balance. This 8% is static and does not trail.</p>
         <p>For 1-Phase accounts, the Maximum Trailing Drawdown is initially set at 6% and trails (using CLOSED BALANCE - NOT equity!) your account until you have achieved a 6% return in your account. Once you have achieved a 6% return the Maximum Trailing Drawdown no longer trails and is permanently locked in at your starting balance. This allows for more trading flexibility as you have proven yourself as a profitable trader and can now freely compound an account.</p>`
    },

    {
        id: "rule1.3",
        question: "What is a Soft Breach?",
        answer: "<p>Soft breach means that we will close all trades that have violated the rule. However, you can continue trading in your evaluation or Funded account.</p>"
    },

    {
        id: "rule1.4",
        question: "Why do I have to place a stop loss on trades?",
        answer: `<p>In line with sound risk management practices, we require a stop loss on every trade. If you fail to place a stop loss at the time of placing the trade/order, we will close the trade. This is only a soft breach rule, so you can continue trading in your account.
        Traders have the option to forego using a stop loss if they opt for the add-on feature on the checkout page.</p>`
    },

    {
        id: "rule1.5",
        question: "Can I hold positions over the weekend?",
        answer: `<p>We require all trades to be closed by 3:45pm EST on Friday. Any trades left open after this time will automatically be closed. Note, this is only a soft breach and you will be able to continue trading once the markets reopen.</p>
        <p>Traders have the flexibility to hold trades over the weekend if they opt for the add-on feature on the checkout page.</p>`
    },

    {
        id: "rule1.7",
        question: "What is a breach for inactivity?",
        answer: `<p>Yes. If you do not place a trade at least once every 30 days on your account, we will consider you inactive and your account will be breached.</p>
       <p> We value our users and are continuously monitoring their experiences and gathering feedback. If sustainability of Limitless Funding is intact, we are open to reconsidering this policy and it may be removed in the next iteration, V2.0, of our platform.</p>`
    },

    {
        id: "rule1.8",
        question: "What is a Lot?",
        answer: `
            <ul>
            <li>Forex - 1 lot = $100k notional</li>
            <li>Index - 1 lot = 10 Contracts</li>
            <li>Cryptos - 1 lot = 1 coin</li>
            <li>Stocks - 1 lot = 100 shares</li>
            <li>Silver - 1 lot = 5000 ounces</li>
            <li>Gold - 1 lot = 100 ounces</li>
            <li>Oil - 1 lot = 1000 barrels</li>
            </ul>`
    },

    {
        id: "rule1.10",
        question: "What products can I trade?",
        answer: "<p>You can trade any products offered by EightCap brokerage. This includes FX pairs and CFD Indices, Metals, Equity Shares, and Cryptocurrencies.</p>"
    },

    {
        id: "rule1.11",
        question: "What is the leverage for each product?",
        answer: "<p>In line with sound risk management practices, we allow up to 10:1 leverage.Forex, Metals, and Indices are 10:1. Equity Shares are 5:1. Cryptos are 2:1.The leverage can be doubled with the add-on.</p>"
    },

    {
        id: "rule1.12",
        question: "Can I use Expert Advisor?",
        answer: "<p>Yes, you can trade using an Expert Advisor.</p>"
    },

    {
        id: "rule1.13",
        question: "Can I trade during News?",
        answer: "<p>Yes, you can trade during news events such as CPI, PPI, FOMC, etc.</p>"
    },

    {
        id: "rule1.14",
        question: "What are drawdown limits for live account?",
        answer: "<p>For 1-Phase evaluation, both evaluation and the live funded account have 5% daily drawdown limit and  6% maximum drawdown limit. While for 2-Phase evaluation, both evaluation and the live funded account have 4% daily drawdown limit and  8% maximum drawdown limit.</p>"
    }
]

const rulesContainer = document.getElementById('rules1p');
const rules = rulesContainer.querySelectorAll('.button');
let showAnswer = false;

for (let i = 0; i < prompts.length; i++) {
    rules[i].addEventListener('click', (e) => {
        e.preventDefault();

        if (rules[i].id === prompts[i].id) {
            if (!showAnswer) {
                rules[i].innerHTML = `${prompts[i].answer}`;
                showAnswer = true;
            } else {
                rules[i].innerHTML = `${prompts[i].question}`;
                showAnswer = false;
            }
        }
    });
}

const evaluations1p = document.getElementsByClassName('evaluations')[0];
const dropdownMenu1p = document.getElementsByClassName('dropdown-menu')[0];

evaluations1p.addEventListener('click',()=>{
    dropdownMenu1p.classList.toggle('visible');
});

