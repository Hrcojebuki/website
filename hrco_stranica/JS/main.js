const hamburgerMenu = document.getElementById('hamburgerNavigation');
const hamburgerMenuIcon = document.getElementById('hamburgerMenuIcon');

hamburgerMenuIcon.addEventListener('click', () => {
  hamburgerMenuIcon.classList.toggle('open');
  hamburgerMenu.classList.toggle('open');
});

// main title

window.addEventListener("DOMContentLoaded", function () {
  var textElements = document.querySelectorAll(".text-effect");
  for (var i = 0; i < textElements.length; i++) {
    textElements[i].style.animationDelay = i * 0.5 + "s";
  }
});

const listItems = document.querySelectorAll('.checkmark');

function changeImageOnHover() {

  for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('mouseenter', function () {
      var image = this.querySelector('img');
      image.src = 'img/icon _tick circle_.png';
    });

    listItems[i].addEventListener('mouseleave', function () {
      var image = this.querySelector('img');
      image.src = 'img/white_checkmark.png';
    });
  }
}

listItems.forEach(checkmark => checkmark.addEventListener('mouseenter', changeImageOnHover()));

// table
document.addEventListener("DOMContentLoaded", function () {
  var viewRows = document.querySelectorAll(".fold-table tr.view");
  for (var i = 0; i < viewRows.length; i++) {
    viewRows[i].addEventListener("click", function () {
      this.classList.toggle("open");
      var foldRow = this.nextElementSibling;
      if (foldRow && foldRow.classList.contains("fold")) {
        foldRow.classList.toggle("open");
      }
    });
  }
});

// comparison
const ftmoBtn = document.getElementById('ftmoBtn');
const mffBtn = document.getElementById('mffBtn');
const tftBtn = document.getElementById('tftBtn');
const comparisonTable = document.getElementById('rightComparison');
mffBtn.addEventListener('click', (e) => {
  e.preventDefault();
  comparisonTable.innerHTML =
    `<div class="comparisonBoxHeading title">Mff</div>
    <div id="comparisonLists2" class="flex">
        <ul class="flex" id="comparisonUl3">
            <li>Price($)</li>
            <li>Account Size</li>
            <li>Evaluation</li>
            <li>Max Drawdown</li>
            <li>Profit Target</li>
            <li>Time Limit</li>
            <li>Mid Trading Days</li>
        </ul>

        <ul class="flex" id="comparisonUl4">
            <li>299</li>
            <li>$50K</li>
            <li>2 Phase</li>
            <li>5% / 12%</li>
            <li>8% / 5%</li>
            <li>None</li>
            <li>5</li>
        </ul>
    </div>
`
});

// ftmo
ftmoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  comparisonTable.innerHTML =
    `<div class="comparisonBoxHeading title">Ftmo</div>
    <div id="comparisonLists2" class="flex">
        <ul class="flex" id="comparisonUl3">
            <li>Price($)</li>
            <li>Account Size</li>
            <li>Evaluation</li>
            <li>Max  Drawdown</li>
            <li>Profit Target</li>
            <li>Time Limit</li>
            <li>Mid Trading Days</li>
        </ul>

        <ul class="flex" id="comparisonUl4">
            <li>345</li>
            <li>50K</li>
            <li>2 Phase</li>
            <li>5% / 10%   </li>
            <li>10% / 5%   </li>
            <li>30 Days</li>
            <li>4</li>
        </ul>
    </div>
`
});
tftBtn.addEventListener('click', (e) => {
  e.preventDefault();
  comparisonTable.innerHTML =
    `<div class="comparisonBoxHeading title">Tft</div>
    <div id="comparisonLists2" class="flex">
        <ul class="flex" id="comparisonUl3">
            <li>Price($)</li>
            <li>Account Size</li>
            <li>Evaluation</li>
            <li>Max Drawdown</li>
            <li>Profit Target</li>
            <li>Time Limit</li>
            <li>Mid Trading Days</li>
        </ul>

        <ul class="flex" id="comparisonUl4">
            <li>289</li>
            <li>50K</li>
            <li>2 Phase</li>
            <li>5% / 10%</li>
            <li>8% / 5%</li>
            <li>35 Days</li>
            <li>5</li>
        </ul>
    </div>
`
});

// faq
const faq1 = document.getElementById('faq1');
const faq2 = document.getElementById('faq2');
const faq3 = document.getElementById('faq3');
const faq4 = document.getElementById('faq4');
const faq5 = document.getElementById('faq5');
let answer = false;

faq1.addEventListener('click', (e) => {
  e.preventDefault();
  if (!answer) {
    faq1.innerHTML = "The fee essentially acts as a demonstration of a trader's commitment to manage the account with utmost care and responsibility. When a trader has something at stake, their trading psychology is more engaged. Moreover, the fee is a minimal percentage compared to the size of the Limitless Funding Account you'll receive after successfully completing the evaluation process. The silver lining is that you cannot lose more than the fee as any potential losses on the Limitless Funding Account are covered by us.Furthermore, the fee covers the usage of all applications and the backend dashboard, which provides statistical and account analysis data to help traders scrutinise and enhance their trading strategies."
    answer = true;
  }
  else {
    faq1.innerHTML = "Why do you charge a fee?"
    answer = false;
  }
});
faq2.addEventListener('click', (e) => {
  e.preventDefault();
  if (!answer) {
    faq2.innerHTML = "You can withdraw your profits at any time, once per calendar month. At the time of any withdrawal request, we will also withdraw our share of the profits made, as well. Important Note: Once you request a withdrawal, your maximum trailing drawdown will be set at your starting balance. This means that if you take a full withdrawal of your share of the profits made in your account, it will also serve as a breach of your account. Important Note: Once you request a withdrawal, your maximum trailing drawdown will be set at your starting balance. This means that if you take a full withdrawal of your share of the profits made in your account, it will also serve as a breach of your account."
    answer = true;
  }
  else {
    faq2.innerHTML = "When can I withdraw my first profit split after getting funded?"
    answer = false;
  }
});
faq3.addEventListener('click', (e) => {
  e.preventDefault();
  if (!answer) {
    faq3.innerHTML = "We do not charge any additional or hidden fees. You are able to customise your 1-phase and 2-phase evaluation at the checkout if you wish, which carry a one time charge. The fee covers the evaluation and verification (for 2-phase), we do not charge any recurring fees."
    answer = true;
  }
  else {
    faq3.innerHTML = "Do you charge any additional fees other than the initial evaluation fee?";
    answer = false;

  }
});
faq4.addEventListener('click', (e) => {
  e.preventDefault();
  if (!answer) {
    faq4.innerHTML = "V1.0 is a starting version focused on delivering basic features to enhance traders’ experience. Our primary objective for Version 1 is to gather valuable feedback from our users, enabling us to refine and improve our platform to meet your needs. By signing up during Limitless Funding V1.0, all traders will be granted exclusive benefits when Version 2 is launched. V1.0 users will gain early access to the exciting new features and functionalities that we are developing. As a V1.0 user you will be able to unlock a world of advantages as a member of Limitless Funding V1.0. You will become eligible for a range of exclusive discounts in our highly anticipated V2.0 release. Be at the forefront of trading with early access to new features, exclusive giveaways, higher capital allocations and higher profit splits.Limitless Funding V2.0, also known as Version 2, will be a follow up version of V1.0 that will bring many exclusive features, including Copy Trading, Instant Funding, Stored Value Card for seamless payouts, Tailored Made Evaluations and more. ";
    answer = true;
  }
  else {
    faq4.innerHTML = "What is V1.0 and V2.0?";
    answer = false;
  }
});
faq5.addEventListener('click', (e) => {
  e.preventDefault();
  if (!answer) {
    faq5.innerHTML = "Limitless Funding is a remote proprietary trading firm where traders can undertake an evaluation in order to gain access to the trading capital on their funded accounts. We have two different evaluations to fit every trading style and level. A trader can take a 1-phase or 2-phase evaluation with different funding levels from $10,000 up to $500,000. After successful completion of the evaluation the trader will be given access to trade capital up to $1,250,000 with up to 90/10 profit split in favour of the trader. ";
    answer = true;
  }
  else {
    faq5.innerHTML = "What is Limitless Funding?";
    answer = false;
  }
});

// table images

const homeTableContent = `<thead>
<tr>
  <th>Funding Amount</th>
  <th>$10,000</th>
  <th>$25,000</th>
  <th>$50,000</th>
  <th>$100,000</th>
  <th>$200,000</th>
</tr>
</thead>
<tbody>
<tr class="view">
  <td>Phase 1 Profit Target</td>
  <td>10%</td>
  <td>10%</td>
  <td>10%</td>
  <td>10%</td>
  <td>10%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        At Limitless Funding, you can get funded by reaching a profit target in the evaluation phase. For
        example: If you sign up for a 25k 1-Phase challenge, your profit target will be 10%. Similarly, if you
        sign up for a 25k 2-Step challenge, your profit target for Phase 1 will be 10%. After achieving the
        profit target(s), you will be able to start trading with the live account funded with the real capital.
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Phase 2 Profit Target</td>
  <td>5%</td>
  <td>5%</td>
  <td>5%</td>
  <td>5%</td>
  <td>5%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>In the 2-Phase evaluation, traders need to reach a profit of 5% on their second step accounts. </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Time Limit</td>
  <td>No Time Limit</td>
  <td>No Time Limit</td>
  <td>No Time Limit</td>
  <td>No Time Limit</td>
  <td>No Time Limit</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>There are No Time Limits for the 2-Phase and 1-Phase Evaluations. It means you can take as much time as
        you want to reach the profit target(s). </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Minimum Trading Days</td>
  <td>None</td>
  <td>None</td>
  <td>None</td>
  <td>None</td>
  <td>None</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>In both the 2-Phase and 1-Phase evaluations, there is no requirement for a minimum number of trading
        days. This implies that it is possible to achieve the profit target and become funded within 24 hours.
        With the Withdraw On Demand feature, you have the flexibility to withdraw your initial payout whenever
        you prefer. This means that you can begin the evaluation process and receive your first payout, all
        within a 48-hour timeframe.</p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Maximum Daily Loss</td>
  <td>4</td>
  <td>4</td>
  <td>4</td>
  <td>4</td>
  <td>4</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        Daily loss limit specifies that you are permitted to lose 5% on 1-Phase and 4% on the 2-Phase of your
        initial account balance on any given day.
      </p>
      <p>
        So here is how the calculation works for 1-Phase evaluation accounts:
      </p>
      <p>
        Your daily loss limit = Cumulative PnL of your open and close positions for the day.
      </p>

      <p>
        This implies that on that specific day, this number should not exceed 5% of your initial account
        balance.
      </p>

      <p>
        For example, if you have a $10,000 account, the maximum daily loss limit is $500, so you are not allowed
        to lose more than $500 on any given day. Suppose you have lost a total of $300 in your closed trades. In
        such a case, you cannot lose more than $200, including floating losses. Note that swap and commission
        rates are included in this calculation. If you lose more than $200, it will be considered a hard breach.
      </p>

      <p>
        Similarly, let's say you gained $500 in profit in a single day. In such a case, you will be allowed to
        lose $500 (your profit) + $500 (your daily loss limit) = $1000. Losing more than $1000 (in both open and
        closed positions) will be considered a hard breach.
      </p>

      <p>
        Let's look at another case. Assume, like in the previous scenario, that you lost $300 in a single day.
        Then you take a trade that is now running at a floating loss of -$250, but when you close it, it becomes
        positive $50. If this occurs, according to our calculations, you will have exceeded your daily loss
        limit the instant your loss exceeds $500.
      </p>


      <p>
        Another thing to keep in mind is that your daily loss limit will be reset at 5PM EST. As an example,
        suppose you have gained a $200 profit in a closed trade and you have a trade that is currently running
        in -$600 floating loss. In this case, you still have not violated your daily drawdown for the day
        because your current daily loss is +$200 - $600= -$400. However, if you hold this one trade with a
        floating loss of $600 after 5PM EST, you will breach the daily loss limit because a new day begins after
        5PM EST and you have already lost $600, which is more than your daily loss limit of $500.
      </p>

    </div>
  </td>
</tr>
<tr class="view">
  <td>Maximum Overall Loss</td>
  <td>8%</td>
  <td>8%</td>
  <td>8%</td>
  <td>8%</td>
  <td>8%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        The Maximum Overall Loss or The Maximum Drawdown refers to the highest amount your account can decrease
        in value before a hard breach of your account occurs.
      </p>

      <p>
        You are allowed to have an overall maximum loss limit of 8% on 2-Phase and 6% on 1-Phase of your initial
        account balance. Same drawdown limits apply on both evaluation and live funded accounts.
      </p>

      <p>
        On a live funded account, when you reach either a 8% profit on a 2-Phase or a 6% profit on a 1-phase
        account, your maximum overall drawdown will be set on your starting balance. So, if you reach a profit
        of 15%, your maximum overall loss will be set at your starting balance, and will not trail. Meaning you
        can lose 14.99% without hard breaching your account. See FAQ for more details.
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Reset Discount</td>
  <td>20%</td>
  <td>20%</td>
  <td>20%</td>
  <td>20%</td>
  <td>20%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        If you violate any rule, your account will be suspended. But you will receive the opportunity to
        continue with the program at a discounted price. This re-registration cost is also known as the 'reset'
        fee since you will restart your trading cycle. This option is always applicable, whether you are in
        evaluation or the funded stage you will always have the option to try again at the discounted fee. The
        reset fee is 80% of the original price for both 1-Phase, 2-phase evaluation and live funded accounts.
      </p>
      <p>
        For example, you have a 25k Evaluation account. The original price of the account is $158. If you breach
        your account during your evaluation trading cycle, you would not be eligible to trade in the account.
        But with Limitless Funding, traders can restart their trading journey by paying $126 as reset fee in
        this situation.
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Regular Price ($)</td>
  <td><s>129</s></td>
  <td><s>209</s></td>
  <td><s>289</s></td>
  <td><s>439</s></td>
  <td><s>829</s></td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        The fee essentially acts as a demonstration of a trader's commitment to manage the account with utmost
        care and responsibility. When a trader has something at stake, their trading psychology is more engaged.
        Moreover, the fee is a minimal percentage compared to the size of the Limitless Funding Account you'll
        receive after successfully completing the evaluation process.
      </p>

      <p>
        The silver lining is that you cannot lose more than the fee as any potential losses on the Limitless
        Funding Account are covered by us.
      </p>

    </div>
  </td>
</tr>
<tr class="view">
  <td>Exclusive Launch Price ($)</td>
  <td>109</td>
  <td>179</td>
  <td>249</td>
  <td>369</td>
  <td>707</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        This price is exclusive to Limitless Funding V1.0, This is an affordable way for traders to get funded
        and to sign up for early access to V2.0 features and other benefits.
      </p>
    </div>
  </td>
</tr>
</tbody>`;

const phase1TableContent = `<thead>
<tr>
  <th>Funding Amount</th>
  <th>$10,000</th>
  <th>$25,000</th>
  <th>$50,000</th>
  <th>$100,000</th>
  <th>$200,000</th>
</tr>
</thead>
<tbody>
<tr class="view">
  <td>Step 1 Profit Target</td>
  <td>10%</td>
  <td>10%</td>
  <td>10%</td>
  <td>10%</td>
  <td>10%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        At Limitless Funding, you can get funded by reaching a profit target in the evaluation phase. For
        example: If you sign up for a 25k 1-Phase challenge, your profit target will be 10%. Similarly, if you
        sign up for a 25k 2-Step challenge, your profit target for Phase 1 will be 10%. After achieving the
        profit target(s), you will be able to start trading with the live account funded with the real
        capital.
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Time Limit</td>
  <td>No Time Limit</td>
  <td>No Time Limit</td>
  <td>No Time Limit</td>
  <td>No Time Limit</td>
  <td>No Time Limit</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        There are No Time Limits for the 2-Phase and 1-Phase Evaluations. It means you can take as much time
        as you want to reach the profit target(s).
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Minimum Trading Days</td>
  <td>None</td>
  <td>None</td>
  <td>None</td>
  <td>None</td>
  <td>None</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        In both the 2-Phase and 1-Phase evaluations, there is no requirement for a minimum number of trading
        days. This implies that it is possible to achieve the profit target and become funded within 24 hours.
        With the Withdraw On Demand feature, you have the flexibility to withdraw your initial payout whenever
        you prefer. This means that you can begin the evaluation process and receive your first payout, all
        within a 48-hour timeframe.
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Maximum Daily Loss</td>
  <td>5%</td>
  <td>5%</td>
  <td>5%</td>
  <td>5%</td>
  <td>5%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        Daily loss limit specifies that you are permitted to lose 5% on 1-Phase and 4% on the 2-Phase of your
        initial account balance on any given day.
      </p>

      <p>
        So here is how the calculation works for 1-Phase evaluation accounts:
      </p>

      <p>
        Your daily loss limit = Cumulative PnL of your open and close positions for the day.
      </p>

      <p>
        This implies that on that specific day, this number should not exceed 5% of your initial account
        balance.
      </p>

      <p>
        For example, if you have a $10,000 account, the maximum daily loss limit is $500, so you are not
        allowed to lose more than $500 on any given day. Suppose you have lost a total of $300 in your closed
        trades. In such a case, you cannot lose more than $200, including floating losses. Note that swap and
        commission rates are included in this calculation. If you lose more than $200, it will be considered a
        hard breach.
      </p>


      <p>
        Similarly, let's say you gained $500 in profit in a single day. In such a case, you will be allowed to
        lose $500 (your profit) + $500 (your daily loss limit) = $1000. Losing more than $1000 (in both open
        and closed positions) will be considered a hard breach.
      </p>

      <p>
        Let's look at another case. Assume, like in the previous scenario, that you lost $300 in a single day.
        Then you take a trade that is now running at a floating loss of -$250, but when you close it, it
        becomes positive $50. If this occurs, according to our calculations, you will have exceeded your daily
        loss limit the instant your loss exceeds $500.
      </p>

      <p>
        Another thing to keep in mind is that your daily loss limit will be reset at 5PM EST. As an example,
        suppose you have gained a $200 profit in a closed trade and you have a trade that is currently running
        in -$600 floating loss. In this case, you still have not violated your daily drawdown for the day
        because your current daily loss is +$200 - $600= -$400. However, if you hold this one trade with a
        floating loss of $600 after 5PM EST, you will breach the daily loss limit because a new day begins
        after 5PM EST and you have already lost $600, which is more than your daily loss limit of $500.
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Maximum Overall Loss</td>
  <td>6%</td>
  <td>6%</td>
  <td>6%</td>
  <td>6%</td>
  <td>6%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        The Maximum Overall Loss or The Maximum Drawdown refers to the highest amount your account can
        decrease in value before a hard breach of your account occurs.
      </p>

      <p>
        You are allowed to have an overall maximum loss limit of 8% on 2-Phase and 6% on 1-Phase of your
        initial account balance. Same drawdown limits apply on both evaluation and live funded accounts.
      </p>

      <p>
        On a live funded account, when you reach either a 8% profit on a 2-Phase or a 6% profit on a 1-phase
        account, your maximum overall drawdown will be set on your starting balance. So, if you reach a profit
        of 15%, your maximum overall loss will be set at your starting balance, and will not trail. Meaning
        you can lose 14.99% without hard breaching your account. See FAQ for more details.
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Profit Split</td>
  <td>Up To 90%</td>
  <td>Up To 90%</td>
  <td>Up To 90%</td>
  <td>Up To 90%</td>
  <td>Up To 90%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        You can have a 90% profit split, if you decide to purchase an add-on upon check-out. However, the
        standard profit split at Limitless Funding is 75% for both the 1-Step and 2-Step challenges.
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Reset Discount</td>
  <td>20%</td>
  <td>20%</td>
  <td>20%</td>
  <td>20%</td>
  <td>20%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        If you violate any rule, your account will be suspended. But you will receive the opportunity to
        continue with the program at a discounted price. This re-registration cost is also known as the
        'reset' fee since you will restart your trading cycle. This option is always applicable, whether you
        are in evaluation or the funded stage you will always have the option to try again at the discounted
        fee. The reset fee is 80% of the original price for both 1-Phase, 2-phase evaluation and live funded
        accounts.
      </p>

      <p>
        For example, you have a 25k Evaluation account. The original price of the account is $158. If you
        breach your account during your evaluation trading cycle, you would not be eligible to trade in the
        account. But with Limitless Funding, traders can restart their trading journey by paying $126 as reset
        fee in this situation.
      </p>
    </div>
  </td>
</tr>

<tr class="view">
  <td>Regular Price ($)</td>
  <td><s>65</s></td>
  <td><s>158</s></td>
  <td><s>298</s></td>
  <td><s>598</s></td>
  <td><s>1198</s></td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        The fee essentially acts as a demonstration of a trader's commitment to manage the account with utmost
        care and responsibility. When a trader has something at stake, their trading psychology is more
        engaged. Moreover, the fee is a minimal percentage compared to the size of the Limitless Funding
        Account you'll receive after successfully completing the evaluation process.

        The silver lining is that you cannot lose more than the fee as any potential losses on the Limitless
        Funding Account are covered by us.

      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Exclusive Launch Price ($) (With the Discount Code)</td>
  <td>56</td>
  <td>135</td>
  <td>253</td>
  <td>509</td>
  <td>1019</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        This price is exclusive to Limitless Funding V1.0, This is an affordable way for traders to get funded
        and to sign up for early access to V2.0 features and other benefits.
      </p>
    </div>
  </td>
</tr>
</tbody>`;

const phase2TableContent = `<thead>
<tr>
  <th>Funding Amount</th>
  <th>$10,000</th>
  <th>$25,000</th>
  <th>$50,000</th>
  <th>$100,000</th>
  <th>$200,000</th>
</tr>
</thead>
<tbody>
<tr class="view">
  <td>Phase 1 Profit Target</td>
  <td>10%</td>
  <td>10%</td>
  <td>10%</td>
  <td>10%</td>
  <td>10%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        At Limitless Funding, you can get funded by reaching a profit target in the evaluation phase. For
        example: If you sign up for a 25k 1-Phase challenge, your profit target will be 10%. Similarly, if you
        sign up for a 25k 2-Step challenge, your profit target for Phase 1 will be 10%. After achieving the
        profit target(s), you will be able to start trading with the live account funded with the real
        capital.
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Phase 2 Profit Target</td>
  <td>5%</td>
  <td>5%</td>
  <td>5%</td>
  <td>5%</td>
  <td>5%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        In the 2-Phase evaluation, traders need to reach a profit of 5% on their second step accounts.
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Time Limit</td>
  <td>No Time Limit</td>
  <td>No Time Limit</td>
  <td>No Time Limit</td>
  <td>No Time Limit</td>
  <td>No Time Limit</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        There are No Time Limits for the 2-Phase and 1-Phase Evaluations. It means you can take as much time
        as you want to reach the profit target(s).
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Minimum Trading Days</td>
  <td>None</td>
  <td>None</td>
  <td>None</td>
  <td>None</td>
  <td>None</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        In both the 2-Phase and 1-Phase evaluations, there is no requirement for a minimum number of trading
        days. This implies that it is possible to achieve the profit target and become funded within 24 hours.
        With the Withdraw On Demand feature, you have the flexibility to withdraw your initial payout whenever
        you prefer. This means that you can begin the evaluation process and receive your first payout, all
        within a 48-hour timeframe.
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Maximum Daily Loss</td>
  <td>4%</td>
  <td>4%</td>
  <td>4%</td>
  <td>4%</td>
  <td>4%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        Daily loss limit specifies that you are permitted to lose 5% on 1-Phase and 4% on the 2-Phase of your
        initial account balance on any given day.
      </p>

      <p>
        So here is how the calculation works for 1-Phase evaluation accounts:
      </p>

      <p>
        Your daily loss limit = Cumulative PnL of your open and close positions for the day.
      </p>

      <p>
        This implies that on that specific day, this number should not exceed 5% of your initial account
        balance.
      </p>

      <p>
        For example, if you have a $10,000 account, the maximum daily loss limit is $500, so you are not
        allowed to lose more than $500 on any given day. Suppose you have lost a total of $300 in your closed
        trades. In such a case, you cannot lose more than $200, including floating losses. Note that swap and
        commission rates are included in this calculation. If you lose more than $200, it will be considered a
        hard breach.
      </p>

      <p>
        Similarly, let's say you gained $500 in profit in a single day. In such a case, you will be allowed to
        lose $500 (your profit) + $500 (your daily loss limit) = $1000. Losing more than $1000 (in both open
        and closed positions) will be considered a hard breach.

      </p>

      <p>
        Let's look at another case. Assume, like in the previous scenario, that you lost $300 in a single day.
        Then you take a trade that is now running at a floating loss of -$250, but when you close it, it
        becomes positive $50. If this occurs, according to our calculations, you will have exceeded your daily
        loss limit the instant your loss exceeds $500.
      </p>

      <p>
        Another thing to keep in mind is that your daily loss limit will be reset at 5PM EST. As an example,
        suppose you have gained a $200 profit in a closed trade and you have a trade that is currently running
        in -$600 floating loss. In this case, you still have not violated your daily drawdown for the day
        because your current daily loss is +$200 - $600= -$400. However, if you hold this one trade with a
        floating loss of $600 after 5PM EST, you will breach the daily loss limit because a new day begins
        after 5PM EST and you have already lost $600, which is more than your daily loss limit of $500.
      </p>

    </div>
  </td>
</tr>
<tr class="view">
  <td>Maximum Overall Loss</td>
  <td>8%</td>
  <td>8%</td>
  <td>8%</td>
  <td>8%</td>
  <td>8%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        The Maximum Overall Loss or The Maximum Drawdown refers to the highest amount your account can
        decrease in value before a hard breach of your account occurs.
      </p>

      <p>
        You are allowed to have an overall maximum loss limit of 8% on 2-Phase and 6% on 1-Phase of your
        initial account balance. Same drawdown limits apply on both evaluation and live funded accounts.
      </p>

      <p>
        On a live funded account, when you reach either a 8% profit on a 2-Phase or a 6% profit on a 1-phase
        account, your maximum overall drawdown will be set on your starting balance. So, if you reach a profit
        of 15%, your maximum overall loss will be set at your starting balance, and will not trail. Meaning
        you can lose 14.99% without hard breaching your account. See FAQ for more details.
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Profit Split</td>
  <td>Up To 90%</td>
  <td>Up To 90%</td>
  <td>Up To 90%</td>
  <td>Up To 90%</td>
  <td>Up To 90%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        You can have a 90% profit split, if you decide to purchase an add-on upon check-out. However, the
        standard profit split at Limitless Funding is 75% for both the 1-Step and 2-Step challenges.
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Reset Discount</td>
  <td>20%</td>
  <td>20%</td>
  <td>20%</td>
  <td>20%</td>
  <td>20%</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        If you violate any rule, your account will be suspended. But you will receive the opportunity to
        continue with the program at a discounted price. This re-registration cost is also known as the
        'reset' fee since you will restart your trading cycle. This option is always applicable, whether you
        are in evaluation or the funded stage you will always have the option to try again at the discounted
        fee. The reset fee is 80% of the original price for both 1-Phase, 2-phase evaluation and live funded
        accounts.
      </p>

      <p>
        For example, you have a 25k Evaluation account. The original price of the account is $158. If you
        breach your account during your evaluation trading cycle, you would not be eligible to trade in the
        account. But with Limitless Funding, traders can restart their trading journey by paying $126 as reset
        fee in this situation.
      </p>
    </div>
  </td>
</tr>


<tr class="view">
  <td>Regular Price ($)</td>
  <td><s>129</s></td>
  <td><s>209</s></td>
  <td><s>289</s></td>
  <td><s>439</s></td>
  <td><s>829</s></td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        The fee essentially acts as a demonstration of a trader's commitment to manage the account with utmost
        care and responsibility. When a trader has something at stake, their trading psychology is more
        engaged. Moreover, the fee is a minimal percentage compared to the size of the Limitless Funding
        Account you'll receive after successfully completing the evaluation process.
      </p>

      <p>
        The silver lining is that you cannot lose more than the fee as any potential losses on the Limitless
        Funding Account are covered by us.
      </p>
    </div>
  </td>
</tr>
<tr class="view">
  <td>Exclusive Launch Price ($)</td>
  <td>$110</td>
  <td>$178</td>
  <td>$246</td>
  <td>$374</td>
  <td>$705</td>
</tr>
<tr class="fold">
  <td colspan="6">
    <div class="fold-content">
      <p>
        This price is exclusive to Limitless Funding V1.0, This is an affordable way for traders to get funded
        and to sign up for early access to V2.0 features and other benefits.
      </p>
    </div>
  </td>
</tr>
<!-- Add more rows with corresponding data here -->
</tbody>`;

const tableImage = document.getElementsByClassName('table-image')[0];
const accountButtons = document.getElementById('account-buttons');
const buttons = accountButtons.getElementsByClassName('button');
// changing tables on click
const table = document.getElementsByClassName('fold-table')[0];
let selected1 = false;
let selected2 = false;
let selected3 = false;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    switch (target) {
      case buttons[0]:
        tableImage.src = 'img/Home Page tablica.png';
        table.innerHTML = homeTableContent;
        var viewRows = document.querySelectorAll(".fold-table tr.view");
        for (var i = 0; i < viewRows.length; i++) {
          viewRows[i].addEventListener("click", function () {
            this.classList.toggle("open");
            var foldRow = this.nextElementSibling;
            if (foldRow && foldRow.classList.contains("fold")) {
              foldRow.classList.toggle("open");
            }
          });
        }
        buttons[0].style.opacity = 1;
        buttons[1].style.opacity = 0.5;
        buttons[2].style.opacity = 0.5;
        break;
      case buttons[1]:
        tableImage.src = 'img/1-Phase.png';
        table.innerHTML = phase1TableContent;
        var viewRows = document.querySelectorAll(".fold-table tr.view");
        for (var i = 0; i < viewRows.length; i++) {
          viewRows[i].addEventListener("click", function () {
            this.classList.toggle("open");
            var foldRow = this.nextElementSibling;
            if (foldRow && foldRow.classList.contains("fold")) {
              foldRow.classList.toggle("open");
            }
          });
        }

        buttons[1].style.opacity = 1;
        buttons[0].style.opacity = 0.5;
        buttons[2].style.opacity = 0.5;
        break;
      case buttons[2]:
        tableImage.src = 'img/2-Phase.png';
        table.innerHTML = phase2TableContent;
        var viewRows = document.querySelectorAll(".fold-table tr.view");
        for (var i = 0; i < viewRows.length; i++) {
          viewRows[i].addEventListener("click", function () {
            this.classList.toggle("open");
            var foldRow = this.nextElementSibling;
            if (foldRow && foldRow.classList.contains("fold")) {
              foldRow.classList.toggle("open");
            }
          });
        }
        buttons[2].style.opacity = 1;
        buttons[0].style.opacity = 0.5;
        buttons[1].style.opacity = 0.5;
        break;
    }
  });
}

// dropdown menu
const evaluations = document.getElementsByClassName('evaluations')[0];
const dropdownMenu = document.getElementsByClassName('dropdown-menu')[0];

evaluations.addEventListener('click', () => {

  dropdownMenu.classList.toggle('visible');
});