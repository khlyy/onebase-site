/**
 * onebase. v6 copy: problem first, then the fix, screen by screen.
 * Client-directed marketing voice in English and Egyptian Arabic.
 */
export const I18N = {
  en: {
    meta: {
      title: 'onebase. Know where every pound went',
      description:
        'No more digging through WhatsApp for receipts or fixing broken Excel sheets. Say it, snap it, and onebase. keeps the books for you.',
    },
    nav: {
      problem: 'Why onebase.',
      story: 'How it works',
      cta: 'Get early access',
      langToggle: 'العربية',
      langAria: 'Switch language to Arabic',
    },
    hero: {
      headline: 'Know where every pound went.',
      subhead:
        'No more digging through WhatsApp for receipts or fixing broken Excel sheets. Say it, snap it, and onebase. keeps the books for you.',
      cta: 'Get free early access',
      zoomHint: 'Open full screen',
      phones: [
        { shot: '11-voice-action-plan.png', caption: 'Say it, it is logged', alt: 'Voice action plan with a paid entry and a follow-up task' },
        { shot: '01-owner-home.png', caption: 'Every account at a glance', alt: 'All accounts home with net position' },
        { shot: '06-team-custody.png', caption: 'Who holds what, live', alt: 'Team balances with remaining and owed amounts' },
      ],
    },
    problem: {
      heading: 'Sound familiar?',
      lead: 'Whether you run a studio, a shop, an event, or just your home budget, money gets messy fast when it lives in chats and sheets.',
      todayLabel: 'You today',
      fixLabel: 'With onebase.',
      rows: [
        { pain: '“Where is that receipt? Somewhere in the WhatsApp group.”', fix: 'Snap it once. It stays attached to the payment, forever.' },
        { pain: '“How much is still with Mahmoud?”', fix: 'See what each person received, paid, and still holds, live.' },
        { pain: '“The Excel sheet broke again.”', fix: 'No formulas. Inflow, paid, and what is left calculate themselves.' },
        { pain: '“I am too busy to type all of this.”', fix: 'Just say it. AI logs it to the right account for you.' },
        { pain: '“The client wants a statement by tonight.”', fix: 'Send a clean A4 PDF on WhatsApp in one tap.' },
      ],
      bridge: 'Here is how onebase. fixes every one of these.',
    },
    story: {
      heading: 'Watch it fix your day, screen by screen.',
      lead: 'Real screens from the app. Scroll and see exactly what you get.',
      counter: (i, n) => `${i} of ${n}`,
      acts: [
        {
          title: 'Capture in seconds',
          chapters: [
            {
              shot: '09-voice-listening.png',
              name: 'Voice capture',
              title: 'Just talk. In Arabic or English.',
              body: 'Busy at the shop or on the road? Tap the mic and say what you paid. That is it.',
              exampleLabel: 'Try saying',
              example: '“Paid 1,850 for Zamalek Studio internet, and remind me tomorrow to check the invoice with Sameh.”',
            },
            {
              shot: '10-voice-ai-processing.png',
              name: 'AI matching',
              title: 'It knows which account you mean.',
              body: 'AI matches your words to the right account, category, amount, and person. No menus to dig through.',
              exampleLabel: 'onebase. reads',
              example: 'Account: Zamalek Studio, Paid: 1,850 EGP, Category: Utilities, Follow-up: Sameh tomorrow.',
            },
            {
              shot: '11-voice-action-plan.png',
              name: 'Action plan',
              title: 'One sentence. Two things done.',
              body: 'A payment logged and tomorrow’s reminder set, waiting only for your OK.',
            },
            {
              shot: '04-receipt-scanner.png',
              name: 'Receipt scan',
              title: 'Got a paper receipt? Snap it.',
              body: 'Camera or InstaPay screenshot. The amount fills itself and the photo stays attached.',
              exampleLabel: 'Works on',
              example: 'Paper receipts, InstaPay screenshots, supplier invoices, and fuel or delivery slips.',
            },
            {
              shot: '08-manual-entry.png',
              name: 'Manual entry',
              title: 'Rather type? It takes seconds.',
              body: 'Amount, category, who paid. Faster than texting it to the group.',
            },
          ],
        },
        {
          title: 'Always organized',
          chapters: [
            {
              shot: '03-project-ledger.png',
              name: 'Account ledger',
              title: 'Every account, perfectly clean.',
              body: 'Inflow, paid, and what is left, always correct. Every entry with its receipt.',
            },
            {
              shot: '12-categories-breakdown.png',
              name: 'Categories & insights',
              title: 'See where the money really goes. Cut what leaks.',
              body: 'Tag every entry with your own categories. At a glance, spot what eats the budget and what to optimize next month.',
              exampleLabel: 'Instant insight',
              example: '“Supplies took 44% of Zamalek Studio spend. Delivery jumped to 3,400 EGP.”',
            },
            {
              shot: '01-owner-home.png',
              name: 'All accounts',
              title: 'Your whole picture on one screen.',
              body: 'Client jobs, the shop, the home budget. Know where you stand in one look.',
            },
            {
              shot: '07-tasks-command.png',
              name: 'Tasks',
              title: 'Never forget a follow-up again.',
              body: 'Invoices to confirm and installments to collect, right next to the numbers.',
            },
          ],
        },
        {
          title: 'Your team, in sync',
          chapters: [
            {
              shot: '06-team-custody.png',
              name: 'Team balances',
              title: 'Know exactly who is holding what.',
              body: 'Every teammate’s received, paid, and remaining, updated the moment they log.',
              exampleLabel: 'Live example',
              example: 'Sameh received 33,500 EGP, paid 24,300 EGP, still holds 9,200 EGP.',
            },
            {
              shot: '02-employee-wallet.png',
              name: 'Team member view',
              title: 'They see their part. You see everything.',
              body: 'Your team logs their spending, while your inflows and profit stay private.',
            },
          ],
        },
        {
          title: 'Ready to share',
          chapters: [
            {
              shot: '05-pdf-statement.png',
              name: 'A4 statement',
              title: 'Client wants a statement? Done in one tap.',
              body: 'A clean A4 PDF with receipts, straight to WhatsApp. They never need the app.',
              exampleLabel: 'What they get',
              example: 'Every inflow, paid entry, category total, and receipt photo in one clean PDF.',
            },
          ],
        },
      ],
    },
    cta: {
      heading: 'Your next receipt belongs in onebase.',
      lead: 'Early access is free. Leave your details and we will send your invite for iPhone, Android, or the web.',
      formHeading: 'Get free early access',
      labelName: 'Your name',
      phName: 'Nadia El-Shenawy',
      labelContact: 'Email or WhatsApp',
      phContact: 'name@email.com or +20 10...',
      labelUse: 'What you will track',
      useOptions: [
        { value: 'solo_personal', label: 'My own money' },
        { value: 'studio_office', label: 'A studio or agency' },
        { value: 'retail_cafe', label: 'A store or cafe' },
        { value: 'events_trips', label: 'Events or trips' },
        { value: 'other_team', label: 'Something else' },
      ],
      labelPlatform: 'Your phone',
      platformOptions: [
        { value: 'ios', label: 'iPhone' },
        { value: 'android', label: 'Android' },
        { value: 'web_both', label: 'Web and mobile' },
      ],
      submit: 'Get free early access',
      submitting: 'Sending...',
      errName: 'Please enter your name.',
      errContact: 'Enter a valid email or WhatsApp number.',
      errEndpoint: 'Connection issue. Please try again.',
      successTitle: 'You are in. Welcome to onebase.',
      successBody: 'Your {platform} invite is on its way.',
      reset: 'Submit another request',
    },
    footer: {
      copy: 'onebase. Know where every pound went.',
      switchLang: 'التبديل للعربية',
    },
    lightbox: { close: 'Close', prev: 'Previous screen', next: 'Next screen' },
  },

  ar: {
    meta: {
      title: 'onebase. اعرف كل جنيه راح فين',
      description:
        'كفاية تدوير على الفواتير في واتساب وتصليح شيتات إكسيل. قولها أو صوّرها، وonebase. يمسك الحسابات عنك.',
    },
    nav: {
      problem: 'ليه onebase.',
      story: 'إزاي بيشتغل',
      cta: 'احجز نسختك',
      langToggle: 'English',
      langAria: 'Switch language to English',
    },
    hero: {
      headline: 'اعرف كل جنيه راح فين.',
      subhead:
        'كفاية تدوير على الفواتير في واتساب وتصليح شيتات إكسيل. قولها أو صوّرها، وonebase. يمسك الحسابات عنك.',
      cta: 'احجز نسختك المجانية',
      zoomHint: 'افتح الشاشة كاملة',
      phones: [
        { shot: '11-voice-action-plan.png', caption: 'قولها وتتسجل', alt: 'خطة تنفيذ صوتية فيها حركة مدفوع ومهمة متابعة' },
        { shot: '01-owner-home.png', caption: 'كل حساباتك بنظرة', alt: 'شاشة كل الحسابات وصافي المركز' },
        { shot: '06-team-custody.png', caption: 'مين معاه إيه، لحظة بلحظة', alt: 'أرصدة الفريق والمتبقي والمستحق' },
      ],
    },
    problem: {
      heading: 'الكلام ده مألوف؟',
      lead: 'سواء عندك استوديو أو محل أو فعالية، أو حتى ميزانية بيتك، الفلوس بتتلخبط بسرعة لما تكون بين الشات والشيتات.',
      todayLabel: 'إنت النهارده',
      fixLabel: 'مع onebase.',
      rows: [
        { pain: '«الفاتورة فين؟ في الجروب في حتة.»', fix: 'صوّرها مرة واحدة، وتفضل متعلقة بالحركة على طول.' },
        { pain: '«محمود لسه معاه كام؟»', fix: 'شوف كل واحد استلم كام ودفع كام ومعاه كام، لحظة بلحظة.' },
        { pain: '«الشيت باظ تاني.»', fix: 'من غير معادلات. الوارد والمدفوع والمتبقي بيتحسبوا لوحدهم.' },
        { pain: '«مش فاضي أقعد أكتب كل ده.»', fix: 'قولها بس، والذكاء الاصطناعي يسجّلها في الحساب الصح.' },
        { pain: '«العميل عايز كشف حساب النهارده بالليل.»', fix: 'ابعتله PDF نضيف على واتساب بضغطة واحدة.' },
      ],
      bridge: 'وده onebase. بيحل كل واحدة فيهم إزاي.',
    },
    story: {
      heading: 'شوفه بيرتّب يومك، شاشة شاشة.',
      lead: 'شاشات حقيقية من التطبيق. انزل وشوف بالظبط اللي هتاخده.',
      counter: (i, n) => `${i} من ${n}`,
      acts: [
        {
          title: 'سجّل في ثواني',
          chapters: [
            {
              shot: '09-voice-listening.png',
              name: 'التسجيل بالصوت',
              title: 'اتكلم بس، بالمصري أو الإنجليزي.',
              body: 'مشغول في المحل أو في الطريق؟ اضغط المايك وقول دفعت إيه. خلاص كده.',
              exampleLabel: 'مثلاً تقول',
              example: '«دفعت ١٨٥٠ جنيه فاتورة إنترنت لاستوديو الزمالك، وفكّرني بكرة أراجع الفاتورة مع سامح.»',
            },
            {
              shot: '10-voice-ai-processing.png',
              name: 'مطابقة بالذكاء الاصطناعي',
              title: 'عارف إنت قصدك أنهي حساب.',
              body: 'الذكاء الاصطناعي بيربط كلامك بالحساب والتصنيف والمبلغ والشخص الصح، من غير ما تدوّر في قوايم.',
              exampleLabel: 'onebase. بيفهم',
              example: 'الحساب: استوديو الزمالك، مدفوع: ١٨٥٠ ج.م، التصنيف: فواتير، متابعة: سامح بكرة.',
            },
            {
              shot: '11-voice-action-plan.png',
              name: 'خطة التنفيذ',
              title: 'جملة واحدة، وحاجتين خلصوا.',
              body: 'الحركة اتسجلت وتذكير بكرة اتظبط، مستنيين موافقتك بس.',
            },
            {
              shot: '04-receipt-scanner.png',
              name: 'تصوير الفواتير',
              title: 'معاك فاتورة ورق؟ صوّرها.',
              body: 'بالكاميرا أو اسكرين إنستاباي. المبلغ بيتكتب لوحده والصورة بتفضل متعلقة.',
              exampleLabel: 'بيشتغل على',
              example: 'فواتير ورق، اسكرين إنستاباي، فواتير موردين، وإيصالات الشحن والبنزين.',
            },
            {
              shot: '08-manual-entry.png',
              name: 'التسجيل اليدوي',
              title: 'بتحب تكتب؟ ثواني وتخلص.',
              body: 'المبلغ، التصنيف، مين دفع. أسرع من إنك تبعتها على الجروب.',
            },
          ],
        },
        {
          title: 'كله مترتب',
          chapters: [
            {
              shot: '03-project-ledger.png',
              name: 'دفتر الحساب',
              title: 'كل حساب مترتب ونضيف.',
              body: 'الوارد والمدفوع والمتبقي دايماً مظبوطين، وكل حركة بفاتورتها.',
            },
            {
              shot: '12-categories-breakdown.png',
              name: 'التصنيفات والتحليل',
              title: 'اعرف فلوسك بتروح فين بالظبط، ووفّر اللي بيضيع.',
              body: 'صنّف كل حركة بالتصنيفات اللي تناسب شغلك أو بيتك. بنظرة واحدة هتعرف أنهي بند بياكل الميزانية وإيه اللي محتاج تقلّله.',
              exampleLabel: 'مثال للرؤية',
              example: '«خامات ومستلزمات واخدة ٤٤٪ من مدفوعات استوديو الزمالك، والتوصيل وصل ٣٤٠٠ جنيه.»',
            },
            {
              shot: '01-owner-home.png',
              name: 'كل الحسابات',
              title: 'الصورة كاملة في شاشة واحدة.',
              body: 'شغل العملا، المحل، ميزانية البيت. اعرف وضعك بنظرة واحدة.',
            },
            {
              shot: '07-tasks-command.png',
              name: 'المهام',
              title: 'مش هتنسى متابعة تاني.',
              body: 'فواتير محتاجة تأكيد وأقساط محتاجة تتحصّل، جنب الأرقام على طول.',
            },
          ],
        },
        {
          title: 'فريقك على نفس الصفحة',
          chapters: [
            {
              shot: '06-team-custody.png',
              name: 'أرصدة الفريق',
              title: 'اعرف بالظبط مين معاه إيه.',
              body: 'كل واحد في فريقك استلم كام ودفع كام وفاضل معاه كام، أول ما يسجّل.',
              exampleLabel: 'مثال حي',
              example: 'سامح استلم ٣٣٥٠٠ ج.م، دفع ٢٤٣٠٠ ج.م، ولسه متبقي معاه ٩٢٠٠ ج.م.',
            },
            {
              shot: '02-employee-wallet.png',
              name: 'عرض عضو الفريق',
              title: 'هما بيشوفوا نصيبهم. وانت بتشوف كل حاجة.',
              body: 'فريقك بيسجّل مدفوعاته، والوارد وأرباحك بيفضلوا ليك لوحدك.',
            },
          ],
        },
        {
          title: 'جاهز تشاركه',
          chapters: [
            {
              shot: '05-pdf-statement.png',
              name: 'كشف حساب A4',
              title: 'العميل طلب كشف حساب؟ خلص بضغطة.',
              body: 'PDF A4 نضيف بالفواتير، على واتساب على طول. ومش محتاج يحمّل التطبيق.',
              exampleLabel: 'اللي بيوصلهم',
              example: 'كل الوارد والمدفوع وإجمالي التصنيفات وصور الفواتير في PDF واحد نضيف.',
            },
          ],
        },
      ],
    },
    cta: {
      heading: 'فاتورتك الجاية مكانها onebase.',
      lead: 'النسخة التجريبية مجانية. سيب بياناتك وهنبعتلك الدعوة على آيفون أو أندرويد أو الويب.',
      formHeading: 'احجز نسختك المجانية',
      labelName: 'الاسم',
      phName: 'نادية الشناوي',
      labelContact: 'الإيميل أو رقم الواتساب',
      phContact: 'name@email.com أو 010...',
      labelUse: 'هتتابع إيه',
      useOptions: [
        { value: 'solo_personal', label: 'فلوسي الشخصية' },
        { value: 'studio_office', label: 'استوديو أو وكالة' },
        { value: 'retail_cafe', label: 'محل أو كافيه' },
        { value: 'events_trips', label: 'فعاليات أو رحلات' },
        { value: 'other_team', label: 'حاجة تانية' },
      ],
      labelPlatform: 'موبايلك',
      platformOptions: [
        { value: 'ios', label: 'آيفون' },
        { value: 'android', label: 'أندرويد' },
        { value: 'web_both', label: 'ويب وموبايل' },
      ],
      submit: 'احجز نسختك المجانية',
      submitting: 'جارٍ التسجيل...',
      errName: 'من فضلك اكتب اسمك.',
      errContact: 'اكتب إيميل أو رقم واتساب صحيح.',
      errEndpoint: 'حصل مشكلة في الاتصال. جرّب تاني.',
      successTitle: 'تمام، إنت معانا. أهلاً بيك في onebase.',
      successBody: 'دعوة {platform} في الطريق ليك.',
      reset: 'تسجيل طلب تاني',
    },
    footer: {
      copy: 'onebase. اعرف كل جنيه راح فين.',
      switchLang: 'Switch to English',
    },
    lightbox: { close: 'إغلاق', prev: 'الشاشة السابقة', next: 'الشاشة التالية' },
  },
};
