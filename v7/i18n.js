/**
 * onebase. v7 copy:
 * - Leads with Simplicity + WhatsApp resonance
 * - Contrasts messy WhatsApp/Excel and overcomplicated finance apps vs simple onebase.
 * - Uses everyday round-number examples (150, 200, 500, 1,000 EGP) anyone gets instantly.
 */
export const I18N = {
  en: {
    meta: {
      title: 'onebase. Simple as WhatsApp. Built for your money.',
      description:
        'Other finance apps bury you in 40 menus. WhatsApp chats lose your receipts. onebase. is the simple middle: say it or snap it, and you are done.',
    },
    nav: {
      problem: 'Why onebase.',
      story: 'How it works',
      cta: 'Get early access',
      langToggle: 'العربية',
      langAria: 'Switch language to Arabic',
    },
    hero: {
      headline: 'Simple as WhatsApp. Built for your money.',
      subhead:
        'Other finance apps bury you in 40 menus and accounting jargon. WhatsApp chats lose your receipts. onebase. is the simple middle: say it or snap it, and you are done.',
      cta: 'Get free early access',
      zoomHint: 'Open full screen',
      phones: [
        { shot: '11-voice-action-plan.png', caption: 'Say it, it is logged', alt: 'Voice action plan with a paid entry and a follow-up task' },
        { shot: '01-owner-home.png', caption: 'Every account at a glance', alt: 'All accounts home with net position' },
        { shot: '12-categories-breakdown.png', caption: 'Know where it all went', alt: 'Categories breakdown showing spend percentages' },
      ],
    },
    problem: {
      compareHeading: 'Why nothing else fits.',
      compareLead:
        'Whether you run a studio, a shop, an event, or your home budget, you should not have to choose between WhatsApp chaos and complicated accounting software.',
      compare: [
        {
          tag: 'Too messy',
          title: 'WhatsApp & Excel',
          body: 'Easy to start, impossible to track. Receipts disappear in WhatsApp groups, Excel formulas break, and nobody knows what is left.',
          featured: false,
        },
        {
          tag: 'Too complicated',
          title: 'Other finance apps',
          body: 'Built for accountants, not real life. Forty menus, debit and credit screens, endless setup. Most people quit after day two.',
          featured: false,
        },
        {
          tag: 'Just right',
          title: 'onebase.',
          body: 'Simple as sending a voice note on WhatsApp. Tap once, say it or snap the receipt, and everything organizes itself in seconds.',
          featured: true,
        },
      ],
      heading: 'Sound familiar?',
      todayLabel: 'You today',
      fixLabel: 'With onebase.',
      rows: [
        { pain: '“Where is that receipt? Somewhere in the WhatsApp group.”', fix: 'Snap it once. It stays attached to the payment, forever.' },
        { pain: '“I tried an accounting app, it had a million buttons.”', fix: 'One screen, one button. Ready to use in 30 seconds.' },
        { pain: '“How much is still with Mahmoud?”', fix: 'See what each person received, paid, and still holds, live.' },
        { pain: '“I am too busy to type all of this.”', fix: 'Just say it like a WhatsApp voice note. AI logs it for you.' },
        { pain: '“The client wants a statement on WhatsApp tonight.”', fix: 'Send a clean A4 PDF straight to WhatsApp in one tap.' },
      ],
      bridge: 'Scroll down and see how simple it really is.',
    },
    story: {
      heading: 'No menus. No setup. Just open and go.',
      lead: 'Real screens from the app. Scroll and watch how every step stays dead simple.',
      counter: (i, n) => `${i} of ${n}`,
      acts: [
        {
          title: 'Capture in seconds',
          chapters: [
            {
              shot: '09-voice-listening.png',
              name: 'Voice capture',
              title: 'Easier than a WhatsApp voice note.',
              body: 'Busy at the shop or on the road? Tap the mic and talk normally, in Arabic or English. That is it.',
              exampleLabel: 'Try saying',
              example: '“Paid 200 for delivery, and remind me tomorrow to call the supplier.”',
            },
            {
              shot: '10-voice-ai-processing.png',
              name: 'AI matching',
              title: 'No forms. No digging through menus.',
              body: 'You just speak. AI puts the amount, category, account, and reminder in the right place automatically.',
              exampleLabel: 'onebase. does the work',
              example: 'Paid 200 EGP, tagged under Delivery, plus tomorrow’s reminder. Zero typing.',
            },
            {
              shot: '11-voice-action-plan.png',
              name: 'Action plan',
              title: 'One sentence. Two things done.',
              body: 'Everything is lined up in front of you. Tap save once and move on with your day.',
            },
            {
              shot: '04-receipt-scanner.png',
              name: 'Receipt scan',
              title: 'Got a receipt? Snap it, forget it.',
              body: 'Point the camera or pick a WhatsApp or InstaPay screenshot. The amount reads itself and the photo stays attached.',
              exampleLabel: 'Simple example',
              example: 'Snap a 150 EGP store receipt or a 500 EGP InstaPay screenshot. Logged in 2 seconds.',
            },
            {
              shot: '08-manual-entry.png',
              name: 'Manual entry',
              title: 'Rather type? Faster than texting WhatsApp.',
              body: 'Type 200, pick a category, tap save. No accounting terms, no extra fields.',
            },
          ],
        },
        {
          title: 'Always clear',
          chapters: [
            {
              shot: '03-project-ledger.png',
              name: 'Account ledger',
              title: 'Every account, clean and automatic.',
              body: 'Inflow, paid, and what is left calculate themselves. Every entry sits right next to its receipt.',
            },
            {
              shot: '12-categories-breakdown.png',
              name: 'Categories & insights',
              title: 'See where the money goes. Cut what leaks.',
              body: 'Tag spending with your own simple categories. Spot what eats your budget and what you can optimize next month.',
              exampleLabel: 'Simple insight',
              example: '“Wait, we spent 1,200 EGP on delivery this week? Let’s group orders next week.”',
            },
            {
              shot: '01-owner-home.png',
              name: 'All accounts',
              title: 'Everything you track, on one screen.',
              body: 'Client jobs, the shop, your home budget. One glance tells you where you stand.',
            },
            {
              shot: '07-tasks-command.png',
              name: 'Tasks',
              title: 'Never drop a follow-up again.',
              body: 'Payments to collect and invoices to check live right beside your numbers, not lost in chat.',
            },
          ],
        },
        {
          title: 'Your team, in sync',
          chapters: [
            {
              shot: '06-team-custody.png',
              name: 'Team balances',
              title: 'Know who holds what, without asking.',
              body: 'No more WhatsApp messages asking “how much do you still have?”. It updates the moment they log.',
              exampleLabel: 'Simple math',
              example: 'You gave Mahmoud 1,000 EGP. He paid 600 EGP. You both see 400 EGP left, live.',
            },
            {
              shot: '02-employee-wallet.png',
              name: 'Team member view',
              title: 'Simple for them. Private for you.',
              body: 'Your team only sees their own balance and logs what they paid. Your inflows and profit stay yours.',
            },
          ],
        },
        {
          title: 'Share on WhatsApp',
          chapters: [
            {
              shot: '05-pdf-statement.png',
              name: 'A4 statement',
              title: 'One tap, straight to WhatsApp.',
              body: 'Need to send a clean statement to a client or partner? Share a crisp A4 PDF with receipts on WhatsApp. They never need the app.',
              exampleLabel: 'What they receive',
              example: 'One clean PDF on WhatsApp with every pound, category, and receipt photo attached.',
            },
          ],
        },
      ],
    },
    cta: {
      heading: 'Leave the WhatsApp mess behind.',
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
      copy: 'onebase. Simple as WhatsApp. Built for your money.',
      switchLang: 'التبديل للعربية',
    },
    lightbox: { close: 'Close', prev: 'Previous screen', next: 'Next screen' },
  },

  ar: {
    meta: {
      title: 'onebase. ببساطة واتساب. ومعمول لفلوسك.',
      description:
        'تطبيقات الحسابات التانية فيها مليون قائمة وتعقيد. وجروبات واتساب الفواتير بتضيع فيها. onebase. هو الحل البسيط: قولها أو صوّرها، وخلّصنا.',
    },
    nav: {
      problem: 'ليه onebase.',
      story: 'إزاي بيشتغل',
      cta: 'احجز نسختك',
      langToggle: 'English',
      langAria: 'Switch language to English',
    },
    hero: {
      headline: 'ببساطة واتساب. ومعمول لفلوسك.',
      subhead:
        'تطبيقات الحسابات التانية فيها مليون قائمة وتعقيد. وجروبات واتساب الفواتير بتضيع فيها. onebase. هو الحل البسيط: قولها أو صوّرها، وخلّصنا.',
      cta: 'احجز نسختك المجانية',
      zoomHint: 'افتح الشاشة كاملة',
      phones: [
        { shot: '11-voice-action-plan.png', caption: 'قولها وتتسجل', alt: 'خطة تنفيذ صوتية فيها حركة مدفوع ومهمة متابعة' },
        { shot: '01-owner-home.png', caption: 'كل حساباتك بنظرة', alt: 'شاشة كل الحسابات وصافي المركز' },
        { shot: '12-categories-breakdown.png', caption: 'اعرف فلوسك راحت فين', alt: 'تحليل التصنيفات ونسب المدفوعات' },
      ],
    },
    problem: {
      compareHeading: 'ليه ولا حاجة تانية نافعة.',
      compareLead:
        'سواء عندك استوديو أو محل أو فعالية أو ميزانية بيتك، مش منطقي تختار بين لخبطة واتساب وبين برامج محاسبة معقدة.',
      compare: [
        {
          tag: 'لخبطة',
          title: 'واتساب وإكسيل',
          body: 'سهل تبدأ، بس مستحيل تتابع. الفواتير بتضيع في جروبات واتساب، ومعادلات إكسيل بتبوظ، ومحدش عارف فاضل كام.',
          featured: false,
        },
        {
          tag: 'معقّدة زيادة',
          title: 'تطبيقات الحسابات التانية',
          body: 'معمولة لمحاسبين مش لحياتك اليومية. مليون شاشة وقوايم ومصطلحات معقدة. أغلب الناس بتقفله من تاني يوم.',
          featured: false,
        },
        {
          tag: 'البسيط الصح',
          title: 'onebase.',
          body: 'ببساطة فويس نوت على واتساب. ضغطة واحدة، قولها أو صوّر الفاتورة، وكل حاجة بتترتّب لوحدها في ثواني.',
          featured: true,
        },
      ],
      heading: 'الكلام ده مألوف؟',
      todayLabel: 'إنت النهارده',
      fixLabel: 'مع onebase.',
      rows: [
        { pain: '«الفاتورة فين؟ ضايعة في جروب واتساب.»', fix: 'صوّرها مرة واحدة، وتفضل متعلقة بالحركة على طول.' },
        { pain: '«جرّبت تطبيق حسابات قبل كده، لقيت فيه مليون زرار.»', fix: 'شاشة واحدة وزرار واحد. بتشتغل عليه في ٣٠ ثانية.' },
        { pain: '«محمود لسه معاه كام؟»', fix: 'شوف كل واحد استلم كام ودفع كام ومعاه كام، لحظة بلحظة.' },
        { pain: '«مش فاضي أقعد أكتب كل ده.»', fix: 'قولها زي فويس نوت على واتساب، والذكاء الاصطناعي يسجّلها.' },
        { pain: '«العميل عايز كشف حساب على واتساب النهارده.»', fix: 'ابعتله PDF نضيف على واتساب بضغطة واحدة.' },
      ],
      bridge: 'انزل وشوف الموضوع بسيط قد إيه.',
    },
    story: {
      heading: 'من غير قوايم ولا تعقيد. افتح واشتغل.',
      lead: 'شاشات حقيقية من التطبيق. انزل وشوف كل خطوة سهلة إزاي.',
      counter: (i, n) => `${i} من ${n}`,
      acts: [
        {
          title: 'سجّل في ثواني',
          chapters: [
            {
              shot: '09-voice-listening.png',
              name: 'التسجيل بالصوت',
              title: 'أسهل من فويس نوت على واتساب.',
              body: 'مشغول في المحل أو في الطريق؟ اضغط المايك واتكلم عادي، بالمصري أو الإنجليزي. خلاص كده.',
              exampleLabel: 'مثلاً تقول',
              example: '«دفعت ٢٠٠ جنيه توصيل، وفكّرني بكرة أكلم المورّد.»',
            },
            {
              shot: '10-voice-ai-processing.png',
              name: 'مطابقة بالذكاء الاصطناعي',
              title: 'من غير فورمات ولا تدوير في قوايم.',
              body: 'إنت بس بتتكلم. والذكاء الاصطناعي يحط المبلغ والتصنيف والحساب والتذكير في مكانهم الصح لوحده.',
              exampleLabel: 'onebase. يعمل الشغل عنك',
              example: 'مدفوع ٢٠٠ ج.م، تحت تصنيف التوصيل، ومعاه تذكير بكرة. من غير ما تكتب حرف.',
            },
            {
              shot: '11-voice-action-plan.png',
              name: 'خطة التنفيذ',
              title: 'جملة واحدة، وحاجتين خلصوا.',
              body: 'كل حاجة جاهزة قدامك. اضغط حفظ مرة واحدة وكمّل يومك.',
            },
            {
              shot: '04-receipt-scanner.png',
              name: 'تصوير الفواتير',
              title: 'معاك فاتورة؟ صوّرها وانسى.',
              body: 'بالكاميرا أو اسكرين من واتساب أو إنستاباي. المبلغ بيتقري لوحده والصورة بتفضل متعلقة.',
              exampleLabel: 'مثال بسيط',
              example: 'صوّر فاتورة بـ ١٥٠ جنيه أو اسكرين إنستاباي بـ ٥٠٠ جنيه. بتتسجّل في ثانيتين.',
            },
            {
              shot: '08-manual-entry.png',
              name: 'التسجيل اليدوي',
              title: 'بتحب تكتب؟ أسرع من رسالة على واتساب.',
              body: 'اكتب ٢٠٠، اختار التصنيف، اضغط حفظ. من غير مصطلحات محاسبة ولا خانات زيادة.',
            },
          ],
        },
        {
          title: 'كله واضح قدامك',
          chapters: [
            {
              shot: '03-project-ledger.png',
              name: 'دفتر الحساب',
              title: 'كل حساب مترتب أوتوماتيك.',
              body: 'الوارد والمدفوع والمتبقي بيتحسبوا لوحدهم، وكل حركة جنبها صورتها.',
            },
            {
              shot: '12-categories-breakdown.png',
              name: 'التصنيفات والتحليل',
              title: 'اعرف فلوسك بتروح فين، ووفّر اللي بيضيع.',
              body: 'صنّف مدفوعاتك بتصنيفاتك البسيطة. بنظرة واحدة تعرف إيه اللي بياكل الميزانية وتقدر تقلّله الشهر الجاي.',
              exampleLabel: 'مثال بسيط',
              example: '«إيه ده، دفعنا ١٢٠٠ جنيه توصيل الأسبوع ده؟ خلّينا نجمّع الطلبات الأسبوع الجاي.»',
            },
            {
              shot: '01-owner-home.png',
              name: 'كل الحسابات',
              title: 'كل اللي بتتابعه في شاشة واحدة.',
              body: 'شغل العملا، المحل، ميزانية البيت. نظرة واحدة تعرفك وضعك بالظبط.',
            },
            {
              shot: '07-tasks-command.png',
              name: 'المهام',
              title: 'مش هتنسى متابعة تاني.',
              body: 'التحصيلات والفواتير اللي محتاجة مراجعة جنب الأرقام على طول، مش ضايعة في الشات.',
            },
          ],
        },
        {
          title: 'فريقك على نفس الصفحة',
          chapters: [
            {
              shot: '06-team-custody.png',
              name: 'أرصدة الفريق',
              title: 'اعرف مين معاه إيه، من غير ما تسأل.',
              body: 'مفيش رسايل واتساب «فاضل معاك كام؟». كل رقم بيتحدّث أول ما يسجّلوا.',
              exampleLabel: 'حسبة بسيطة',
              example: 'ادّيت محمود ١٠٠٠ جنيه. دفع ٦٠٠ جنيه. إنتوا الاتنين شايفين فاضل معاه ٤٠٠ جنيه، لحظة بلحظة.',
            },
            {
              shot: '02-employee-wallet.png',
              name: 'عرض عضو الفريق',
              title: 'سهل ليهم. وخاص بيك إنت.',
              body: 'فريقك بيشوف رصيده بس ويسجّل مدفوعاته. والوارد وأرباحك بيفضلوا ليك لوحدك.',
            },
          ],
        },
        {
          title: 'شاركه على واتساب',
          chapters: [
            {
              shot: '05-pdf-statement.png',
              name: 'كشف حساب A4',
              title: 'ضغطة واحدة، على واتساب على طول.',
              body: 'محتاج تبعت كشف حساب لعميل أو شريك؟ ابعت PDF نضيف بالفواتير على واتساب، ومش محتاج يحمّل التطبيق.',
              exampleLabel: 'اللي بيوصلهم',
              example: 'ملف PDF واحد نضيف على واتساب فيه كل جنيه وكل تصنيف وكل صورة فاتورة.',
            },
          ],
        },
      ],
    },
    cta: {
      heading: 'سيب لخبطة واتساب وراك.',
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
      copy: 'onebase. ببساطة واتساب. ومعمول لفلوسك.',
      switchLang: 'Switch to English',
    },
    lightbox: { close: 'إغلاق', prev: 'الشاشة السابقة', next: 'الشاشة التالية' },
  },
};
