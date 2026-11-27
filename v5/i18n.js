/**
 * onebase. v5 Story Edition copy (English LTR and professional Egyptian Arabic RTL)
 * Every capability shown through real screens, in order: Capture, Organize, Team, Share.
 */
export const I18N = {
  en: {
    meta: {
      title: 'onebase. Every payment, every receipt, one clean ledger',
      description:
        'Speak it, snap it, or type it. onebase. files every payment to the right account, updates team balances, and prepares WhatsApp-ready statements.',
    },
    nav: {
      story: 'How it works',
      fits: 'Who it is for',
      cta: 'Join free beta',
      langToggle: 'العربية',
      langAria: 'Switch language to Arabic',
    },
    hero: {
      headline: 'Every payment, every receipt, one clean ledger.',
      subhead:
        'Speak it, snap it, or type it. onebase. files it to the right account, updates your team balances, and prepares the statement.',
      cta: 'Join free beta',
      zoomHint: 'Open full screen',
      gallery: [
        { shot: '11-voice-action-plan.png', caption: 'Say it', alt: 'Voice action plan with a paid entry and a follow-up task' },
        { shot: '04-receipt-scanner.png', caption: 'Snap it', alt: 'Receipt and InstaPay scanner' },
        { shot: '01-owner-home.png', caption: 'Track every account', alt: 'All accounts home with net position and account cards' },
        { shot: '06-team-custody.png', caption: 'Balance your team', alt: 'Team balances showing remaining and owed amounts' },
        { shot: '05-pdf-statement.png', caption: 'Send the statement', alt: 'A4 account statement ready to share on WhatsApp' },
      ],
    },
    story: {
      heading: 'From a voice note to a clean statement.',
      lead: 'Scroll through the real app. Every screen below is exactly what you get.',
      counter: (i, n) => `${i} of ${n}`,
      acts: [
        {
          title: 'Capture',
          chapters: [
            {
              shot: '09-voice-listening.png',
              name: 'Voice capture',
              title: 'Say it the way you would tell a colleague.',
              body: 'Tap the mic and describe the payment in Egyptian Arabic or English. No forms, no fields.',
            },
            {
              shot: '10-voice-ai-processing.png',
              name: 'AI matching',
              title: 'AI finds the account, the amount, and the person.',
              body: 'It matches what you said to your real accounts and teammates, so nothing lands in the wrong place.',
            },
            {
              shot: '11-voice-action-plan.png',
              name: 'Action plan',
              title: 'One sentence, two actions. You approve.',
              body: 'A paid entry and a dated follow-up task, drafted side by side. Review, adjust, save.',
            },
            {
              shot: '04-receipt-scanner.png',
              name: 'Receipt scan',
              title: 'Paper receipt or InstaPay screenshot? Snap it.',
              body: 'Point the camera at any bill, or pick a transfer screenshot from your photos. The total fills itself.',
            },
            {
              shot: '08-manual-entry.png',
              name: 'Manual entry',
              title: 'Prefer typing? A few taps and it is saved.',
              body: 'Amount, category, who paid, and an optional photo. Faster than sending a WhatsApp message.',
            },
          ],
        },
        {
          title: 'Organize',
          chapters: [
            {
              shot: '03-project-ledger.png',
              name: 'Account ledger',
              title: 'Every account gets its own clean ledger.',
              body: 'Inflow, paid, and net at the top. Every entry below with its receipt, note, and who paid it.',
            },
            {
              shot: '01-owner-home.png',
              name: 'All accounts',
              title: 'All your accounts on one screen.',
              body: 'Client work, a store branch, or a home renovation budget. See where every pound stands at a glance.',
            },
            {
              shot: '07-tasks-command.png',
              name: 'Tasks',
              title: 'Follow-ups live next to the money.',
              body: 'Invoice confirmations, installments, and reminders per account, with overdue and due today always in view.',
            },
          ],
        },
        {
          title: 'Team',
          chapters: [
            {
              shot: '06-team-custody.png',
              name: 'Team balances',
              title: 'Send funds and know what is left with each person.',
              body: 'See what every teammate received, what they paid, and what is remaining or owed back to them.',
            },
            {
              shot: '02-employee-wallet.png',
              name: 'Team member view',
              title: 'Your team sees only their own balance.',
              body: 'Teammates log payments by voice or photo. Your inflows and other accounts stay private.',
            },
          ],
        },
        {
          title: 'Share',
          chapters: [
            {
              shot: '05-pdf-statement.png',
              name: 'A4 statement',
              title: 'An A4 statement on WhatsApp in one tap.',
              body: 'Running balance and receipt thumbnails in a clean PDF. The other side does not need the app.',
            },
          ],
        },
      ],
    },
    fits: {
      heading: 'If it lives in WhatsApp and Excel today, it fits here.',
      lead: 'Use it alone for your own budgets, or add teammates when money passes through more hands.',
      items: [
        { title: 'Freelancers and personal budgets', body: 'Track client retainers, side projects, or a home renovation without a single spreadsheet.' },
        { title: 'Studios and agencies', body: 'One account per client, receipts attached, and a statement ready the moment they ask.' },
        { title: 'Stores and cafes', body: 'Daily purchases, supplier bills, and staff spending, each in its own place.' },
        { title: 'Events and trips', body: 'Funds sent to the team, what was spent, what is left, and a clean settlement at the end.' },
      ],
      local: 'Arabic and English, Egyptian pounds, InstaPay screenshots, and WhatsApp sharing are built in from day one.',
    },
    cta: {
      heading: 'Start with one account today.',
      lead: 'Free during the beta on iOS, Android, and the web. Leave your details and we will send your invite.',
      formHeading: 'Request free beta access',
      labelName: 'Your name',
      phName: 'Nadia El-Shenawy',
      labelContact: 'Email or WhatsApp',
      phContact: 'name@email.com or +20 10...',
      labelUse: 'How you will use it',
      useOptions: [
        { value: 'solo_personal', label: 'Solo and personal' },
        { value: 'studio_office', label: 'Studio or agency' },
        { value: 'retail_cafe', label: 'Store or cafe' },
        { value: 'events_trips', label: 'Events or trips' },
        { value: 'other_team', label: 'Another kind of team' },
      ],
      labelPlatform: 'Platform',
      platformOptions: [
        { value: 'ios', label: 'iPhone (TestFlight)' },
        { value: 'android', label: 'Android' },
        { value: 'web_both', label: 'Web and mobile' },
      ],
      submit: 'Join free beta',
      submitting: 'Sending...',
      errName: 'Please enter your name.',
      errContact: 'Enter a valid email or WhatsApp number.',
      errEndpoint: 'Connection issue. Please try again.',
      successTitle: 'You are on the beta list.',
      successBody: 'We will send your invite for {platform} shortly.',
      reset: 'Submit another request',
    },
    footer: {
      copy: 'onebase. One clean ledger for every account and every team.',
      switchLang: 'التبديل للعربية',
    },
    lightbox: { close: 'Close', prev: 'Previous screen', next: 'Next screen' },
  },

  ar: {
    meta: {
      title: 'onebase. كل جنيه وكل فاتورة في دفتر واحد نضيف',
      description:
        'قولها أو صوّرها أو اكتبها. onebase. بيسجّل كل مدفوع في الحساب الصح، ويحدّث أرصدة فريقك، ويجهّز كشف حساب جاهز لواتساب.',
    },
    nav: {
      story: 'إزاي بيشتغل',
      fits: 'مناسب لمين',
      cta: 'سجّل في البيتا',
      langToggle: 'English',
      langAria: 'Switch language to English',
    },
    hero: {
      headline: 'كل جنيه وكل فاتورة في دفتر واحد نضيف.',
      subhead:
        'قولها أو صوّرها أو اكتبها. onebase. بيسجّلها في الحساب الصح، ويحدّث أرصدة فريقك، ويجهّز كشف الحساب.',
      cta: 'سجّل في البيتا مجاناً',
      zoomHint: 'افتح الشاشة كاملة',
      gallery: [
        { shot: '11-voice-action-plan.png', caption: 'قولها بصوتك', alt: 'خطة تنفيذ صوتية فيها حركة مدفوع ومهمة متابعة' },
        { shot: '04-receipt-scanner.png', caption: 'صوّر الفاتورة', alt: 'شاشة تصوير الفواتير ولقطات إنستاباي' },
        { shot: '01-owner-home.png', caption: 'تابع كل حساباتك', alt: 'شاشة كل الحسابات وصافي المركز' },
        { shot: '06-team-custody.png', caption: 'أرصدة فريقك', alt: 'أرصدة الفريق والمتبقي والمستحق' },
        { shot: '05-pdf-statement.png', caption: 'ابعت كشف الحساب', alt: 'كشف حساب A4 جاهز للمشاركة على واتساب' },
      ],
    },
    story: {
      heading: 'من رسالة صوتية لكشف حساب نضيف.',
      lead: 'انزل في التطبيق الحقيقي. كل شاشة تحت هي بالظبط اللي هتستخدمه.',
      counter: (i, n) => `${i} من ${n}`,
      acts: [
        {
          title: 'سجّل',
          chapters: [
            {
              shot: '09-voice-listening.png',
              name: 'التسجيل بالصوت',
              title: 'قولها زي ما بتحكيها لزميلك.',
              body: 'اضغط على المايك واحكي الحركة بالمصري أو الإنجليزي. من غير خانات ولا فورم.',
            },
            {
              shot: '10-voice-ai-processing.png',
              name: 'مطابقة بالذكاء الاصطناعي',
              title: 'الذكاء الاصطناعي بيحدد الحساب والمبلغ والشخص.',
              body: 'بيطابق كلامك مع حساباتك وفريقك الفعليين، فمفيش حركة بتروح في المكان الغلط.',
            },
            {
              shot: '11-voice-action-plan.png',
              name: 'خطة التنفيذ',
              title: 'جملة واحدة، حركتين. وانت اللي بتوافق.',
              body: 'حركة مدفوع ومهمة متابعة بتاريخها جاهزين جنب بعض. راجع وعدّل واحفظ.',
            },
            {
              shot: '04-receipt-scanner.png',
              name: 'تصوير الفواتير',
              title: 'فاتورة ورق أو اسكرين إنستاباي؟ صوّرها.',
              body: 'وجّه الكاميرا على أي فاتورة أو اختار لقطة التحويل من صورك، والمبلغ بيتكتب لوحده.',
            },
            {
              shot: '08-manual-entry.png',
              name: 'التسجيل اليدوي',
              title: 'بتحب تكتب بإيدك؟ كام ضغطة وتتحفظ.',
              body: 'المبلغ، الوسم، مين دفع، وصورة لو حابب. أسرع من رسالة واتساب.',
            },
          ],
        },
        {
          title: 'رتّب',
          chapters: [
            {
              shot: '03-project-ledger.png',
              name: 'دفتر الحساب',
              title: 'كل حساب ليه دفتر نضيف لوحده.',
              body: 'الوارد والمدفوع والصافي فوق، وتحتهم كل حركة بفاتورتها وملاحظتها ومين دفعها.',
            },
            {
              shot: '01-owner-home.png',
              name: 'كل الحسابات',
              title: 'كل حساباتك في شاشة واحدة.',
              body: 'شغل عميل، فرع محل، أو ميزانية تجديد البيت. اعرف كل جنيه فين من أول نظرة.',
            },
            {
              shot: '07-tasks-command.png',
              name: 'المهام',
              title: 'المتابعات جنب الفلوس.',
              body: 'تأكيد الفواتير والأقساط والتذكيرات لكل حساب، والمتأخر ومهام النهارده قدامك دايماً.',
            },
          ],
        },
        {
          title: 'فريقك',
          chapters: [
            {
              shot: '06-team-custody.png',
              name: 'أرصدة الفريق',
              title: 'ابعت فلوس واعرف المتبقي مع كل واحد.',
              body: 'شوف كل فرد في فريقك استلم كام ودفع كام، والمتبقي معاه أو المستحق له.',
            },
            {
              shot: '02-employee-wallet.png',
              name: 'عرض عضو الفريق',
              title: 'فريقك بيشوف رصيده هو بس.',
              body: 'كل فرد بيسجّل مدفوعاته بالصوت أو الصورة، والوارد وباقي حساباتك بيفضلوا ليك.',
            },
          ],
        },
        {
          title: 'شارك',
          chapters: [
            {
              shot: '05-pdf-statement.png',
              name: 'كشف حساب A4',
              title: 'كشف حساب A4 على واتساب بضغطة.',
              body: 'رصيد تراكمي وصور الفواتير في PDF مرتب، والطرف التاني مش محتاج التطبيق.',
            },
          ],
        },
      ],
    },
    fits: {
      heading: 'لو حساباتك النهارده على واتساب وإكسيل، مكانها هنا.',
      lead: 'استخدمه لوحدك لميزانياتك، أو ضيف فريقك لما الفلوس تعدّي على أكتر من إيد.',
      items: [
        { title: 'شغل حر وميزانيات شخصية', body: 'تابع فلوس عملائك أو مشروع جانبي أو تجديد البيت من غير ولا شيت.' },
        { title: 'استوديوهات ووكالات', body: 'حساب لكل عميل، فواتيره مرفقة، وكشفه جاهز وقت ما يطلبه.' },
        { title: 'محلات وكافيهات', body: 'مشتريات يومية وفواتير موردين ومدفوعات الموظفين، كل حاجة في مكانها.' },
        { title: 'فعاليات ورحلات', body: 'الفلوس اللي اتبعتت للفريق، اتصرف منها كام، والمتبقي، وتسوية نضيفة في الآخر.' },
      ],
      local: 'عربي وإنجليزي، بالجنيه المصري، ولقطات إنستاباي ومشاركة واتساب جاهزين من أول يوم.',
    },
    cta: {
      heading: 'ابدأ بحساب واحد النهارده.',
      lead: 'مجاني خلال البيتا على آيفون وأندرويد والويب. سيب بياناتك وهنبعتلك الدعوة.',
      formHeading: 'اطلب رابط النسخة التجريبية',
      labelName: 'الاسم',
      phName: 'نادية الشناوي',
      labelContact: 'الإيميل أو رقم الواتساب',
      phContact: 'name@email.com أو 010...',
      labelUse: 'هتستخدمه في إيه',
      useOptions: [
        { value: 'solo_personal', label: 'شخصي أو شغل حر' },
        { value: 'studio_office', label: 'استوديو أو وكالة' },
        { value: 'retail_cafe', label: 'محل أو كافيه' },
        { value: 'events_trips', label: 'فعاليات أو رحلات' },
        { value: 'other_team', label: 'نوع تاني من الفرق' },
      ],
      labelPlatform: 'الموبايل',
      platformOptions: [
        { value: 'ios', label: 'آيفون (TestFlight)' },
        { value: 'android', label: 'أندرويد' },
        { value: 'web_both', label: 'ويب وموبايل' },
      ],
      submit: 'احجز في البيتا مجاناً',
      submitting: 'جارٍ التسجيل...',
      errName: 'من فضلك اكتب اسمك.',
      errContact: 'اكتب إيميل أو رقم واتساب صحيح.',
      errEndpoint: 'حصل مشكلة في الاتصال. جرّب تاني.',
      successTitle: 'تم تسجيلك في البيتا.',
      successBody: 'هنبعتلك دعوة {platform} قريباً.',
      reset: 'تسجيل طلب تاني',
    },
    footer: {
      copy: 'onebase. دفتر واحد نضيف لكل حساباتك وفريقك.',
      switchLang: 'Switch to English',
    },
    lightbox: { close: 'إغلاق', prev: 'الشاشة السابقة', next: 'الشاشة التالية' },
  },
};
