import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',  
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  static base = '/assets/data/'
  static languageToggle = false;
  static currentLang = 'en';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    if (this.platform.is("pwa")) {

    } else {
      this.platform.ready().then(() => {
        this.statusBar.backgroundColorByName('white');
        this.statusBar.styleDefault();
        this.splashScreen.hide();     
      });
    }
  }

  static content = {
    "home": {
      "en": {
        "home": "Home",
        "map": "Map",
        "barometer": "Social Barometer",
        "title": "COVIA",
        "subtitle":"Corona Virus Alert app containing informative real data of the outburst.",
        "checkupButton": "Self Check-Up",
        "trackButton": "Track Cases",
        "updates" : "Get official updates",
        "on": "from",
        "region": "Indian region updates from",
        "mohfw": "Ministry of Health and Family Welfare",
        "hindi": "Hindi",
        "who": "WHO",
        "pp1": "by submitting this form you agree our ",
        "pp2": "",
        "pp": "privacy policy",
        "submit": "Submit",
  },
      "hi": {
        "home": "डैशबोर्ड",
        "title": "कोविआ",
        "map": "नक्शा",
        "barometer": "सामाजिक बैरोमीटर",
        "subtitle": "कोरोना वायरस अलर्ट ऐप जिसमें मुखरता का वास्तविक डेटा है।",
        "checkupButton": "सेल्फ चेक-अप",
        "trackButton": "ट्रैक करें",
        "updates": "से आधिकारिक अपडेट प्राप्त करें",
        "on": "पर",
        "region":  "भारतीय क्षेत्र से अद्यतन",
        "mohfw": "स्वास्थ्य और परिवार कल्याण मंत्रालय",
        "hindi": "हिंदी",
        "who": "विश्व स्वास्थ्य संगठन",
        "pp1": "इस फ़ॉर्म को सबमिट करके आप हमारी ",
        "pp2": "से सहमत होते हैं।",
        "pp": "गोपनीयता नीति",
        "submit": "प्रस्तुत"
      },
       "pb": {
        "home": "ਘਰ",
        "map": "ਨਕਸ਼ਾ",
        "title": "ਕੋਵਿਆ",
        "barometer": "ਸੋਸ਼ਲ ਬੈਰੋਮੀਟਰ",
        "subtitle": "ਕਰੋਨਾ ਵਾਇਰਸ ਚੁਕੰਨਾ ਐਪ ਜਿਸ ਵਿੱਚ ਵਿਸਫੋਟ ਦਾ ਵਾਸਤਵਿਕ ਡੈਟਾ ਹੈ।।",
        "checkupButton": "ਸੈਲਫ ਚੈੱਕ-ਅਪ।",
        "trackButton": "ਟ੍ਰੈਕ ਕਰੋ",
        "updates": "ਅਧਿਕਾਰਿਕ ਅਪਡੇਟ ਪ੍ਰਾਪਤ ਕਰੋ",
        "on": "ਤੋਂ",
        "region":  "ਭਾਰਤੀ ਖੇਤਰ ਤੇ ਅਪਡੇਟ",
        "mohfw": "ਸਵਾਸਥ ਅਤੇ ਪਰਿਵਾਰ ਕਲਿਆਣ ਮੰਤਰਾਲੇ ਵੱਲੋਂ ।।",
        "hindi": "ਪੰਜਾਬੀ",
        "who": "ਸੰਸਾਰ ਸਵਾਸਥ ਸੰਗਠਨ",
        "pp1": "ਇਸ ਫਾਰਮ ਨੂੰ ਜਮ੍ਹਾ ਕਰਕੇ ਤੁਸੀਂ ਸਾਡੇ ਨਾਲ ਸਹਿਮਤ ਹੋ",
        "pp2": "",
        "pp": "ਪਰਾਈਵੇਟ ਨੀਤੀ",
        "submit": "ਜਮ੍ਹਾਂ ਕਰੋ"
      }
    },
    "about": {
      "en": {
          "hindi": "Hindi",
          "symptoms": "Symptoms source:",
          "precaution": "Precautions source:",
          "support": "Supporters",
          "title": "Data curated from",
          "and": "and",
          "website": "website",
          "mohfw": "MOHFW",
          "who": "WHO"
      },
      "hi": {
          "hindi": "हिंदी",
          "symptoms": "लक्षण स्रोत:",
          "precaution": "सावधानियाँ स्रोत:",
          "support": " हमारे समर्थक",
          "who": "विश्व स्वास्थ्य संगठन ",
          "and": "और",
          "mohfw": "स्वास्थ्य और परिवार कल्याण मंत्रालय",
          "website": "वेबसाइट से डेटा प्राप्त किया गया है।"
      },
      "pb": {
        "symptoms": "ਲੱਛਣ ਸਰੋਤ:",
        "precaution": "ਸਾਵਧਾਨੀਆਂ ਸਰੋਤ:",
        "support": "ਸਮਰਥਕ",
        "who": "ਵਿਸ਼ਵ ਸਿਹਤ ਸੰਗਠਨ",
        "and": "ਅਤੇ",
        "mohfw": "ਸਿਹਤ ਅਤੇ ਪਰਿਵਾਰ ਭਲਾਈ ਮੰਤਰਾਲਾ",
        "website": "ਵੈਬਸਾਈਟ ਤੋਂ ਡਾਟਾ ਪ੍ਰਾਪਤ ਕੀਤਾ ਗਿਆ ਹੈ."
      }
    },
    "updates": {
      "en": {
        "hindi": "Hindi",
        "updates": "Updates",
         "dataSource": "Data Source",
         "mohfw": "MOHFW",
      },
      "hi": {
        "hindi": "हिंदी",
        "updates": "अपडेट",
        "dataSource": "डेटा स्रोत",
        "mohfw": "स्वास्थ्य और परिवार कल्याण मंत्रालय",
      },
      "pb": {
        "updates": "ਅਪਡੇਟਸ",
        "dataSource": "ਡਾਟਾ ਸਰੋਤ",
        "mohfw": "MOHFW",
      }
    },
    "modal": {
      "en": {
        "title":"Test for Doctor Visit",
        "hindi": "Hindi",
        "stress": "May be you are stressed out.",
        "safe": "You are safe. Take care of yourself.",
        "hydrate":"You need to hydrate properly and ensure proper personal hygiene. Observe and re-evaluate after 2 days.",
        "consult": "You should consult your doctor. Early checkup can ensure that you are safe.",
        "call": "Call the DOH Hotline",
        "score": "Your score for doctor checkup is",
        "adopt": "Adapted from ",
        "guide": "Guidelines"
      },
      "hi": {
        "title":"डॉक्टर को दिखाने के लिए परीक्षण",
        "hindi": "हिंदी",
        "stress": "हो सकता है आप तनाव में हैं।",
        "safe": "आप सुरक्षित है। रोज अपना ख्याल रखें।",
        "hydrate": "आपको ठीक से हाइड्रेट करने और उचित व्यक्तिगत स्वच्छता सुनिश्चित करने की आवश्यकता है। 2 दिनों के बाद निरीक्षण और पुनर्मूल्यांकन करें।",
        "consult": "आपको अपने डॉक्टर से सलाह लेनी चाहिए। प्रारंभिक जाँच यह सुनिश्चित कर सकती है कि आप सुरक्षित हैं।",
        "call": "डीओएच हॉटलाइन को कॉल करें",
        "score": "डॉक्टर चेकअप के लिए आपका स्कोर है",
        "adopt": "दिशा-निर्देश",
        "guide": "से गृहीत किया गया"
      },
      "pb": {
        "title": 'ਡਾਕਟਰ ਨੂੰ ਵੇਖਣ ਲਈ ਟੈਸਟ',
        "stress": "ਸ਼ਾਇਦ ਤੁਸੀਂ ਤਣਾਅ ਵਿੱਚ ਹੋ.",
        "safe": "ਤੁਸੀਂ ਸੁਰੱਖਿਅਤ ਹੋ ਹਰ ਰੋਜ਼ ਆਪਣੀ ਸੰਭਾਲ ਕਰੋ.",
        "hydrate": "ਤੁਹਾਨੂੰ ਸਹੀ dੰਗ ਨਾਲ ਹਾਈਡਰੇਟ ਕਰਨ ਅਤੇ ਸਹੀ ਨਿੱਜੀ ਸਫਾਈ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣ ਦੀ ਜ਼ਰੂਰਤ ਹੈ. ਜਾਂਚ ਕਰੋ ਅਤੇ 2 ਦਿਨਾਂ ਬਾਅਦ ਮੁੜ ਮੁਲਾਂਕਣ ਕਰੋ.",
        "consult": "ਤੁਹਾਨੂੰ ਆਪਣੇ ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਲੈਣੀ ਚਾਹੀਦੀ ਹੈ. ਮੁ preਲੀ ਜਾਂਚ ਇਹ ਸੁਨਿਸ਼ਚਿਤ ਕਰ ਸਕਦੀ ਹੈ ਕਿ ਤੁਸੀਂ ਸੁਰੱਖਿਅਤ ਹੋ.",
        "call": "ਡੋਹ ਹਾਟਲਾਈਨ ਨੂੰ ਕਾਲ ਕਰੋ",
        "score": "ਤੁਹਾਡਾ ਸਕੋਰ ਡਾਕਟਰ ਦੀ ਜਾਂਚ ਲਈ ਹੈ",
        "adopt": "ਦਿਸ਼ਾਵਾਂ",
        "guide": "ਤੋਂ ਹਾਸਲ ਕੀਤਾ"
      }
    },
    "care": {
      "en": {
        "care": "Care",
        "hindi": "Hindi",
        "title": "Coronavirus Disease 2019 (COVID-19)",
        "symptom": "Symptoms",
        "symNote": "Call your doctor: If you think you have been exposed to COVID-19 and develop a fever and symptoms, such as cough or difficulty breathing, call your healthcare provider for medical advice.",
        "symWatch": "Watch for symptoms",
        "symReport": "Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.",
        "symPoints": "The following symptoms may appear days after exposure.*",
        "fever": "Fever",
        "cough": "Cough",
        "breath": "Shortness of breath",
        "symSign": "If you develop emergency warning signs for COVID-19 get medical attention immediately. Emergency warning signs include*:",
        "pt1": "Difficulty breathing or shortness of breath",
        "pt2": "Persistent pain or pressure in the chest",
        "pt3": "New confusion or inability to arouse",
        "pt4": "Bluish lips or face",
        "precaution": "Precautions",
        "preNote": "Stay aware of the latest information on the COVID-19 outbreak, Most people who become infected experience mild illness and recover, but it can be more severe for others. Take care of your health and protect others by doing the following:",
        "preDo": "What you can do",
        "preWash": "Wash your hands frequently",
        "preWashNote": "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.",
        "preWhy": "Why?",
        "preWashWhy": " Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.",
        "preSocial": "Maintain social distancing",
        "preSocialNote": "Maintain at least 1 meter (3 feet) distance between yourself and anyone who is coughing or sneezing.",
        "preSocialWhy": "When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.",
        "preAvoid": "Avoid touching eyes, nose and mouth",
        "preAvoidWhy": "Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.",
        "prePractice": "Practice respiratory hygiene",
        "prePracticeNote": "Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.",
        "prePracticeWhy": "Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.",
        "preHome": "Stay home if you feel unwell.",
        "preHomeNote": "If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.",
        "preHomeWhy": " National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections. Stay informed and follow advice given by your healthcare provider.",
        "preSign": "Protection measures for persons who are in or have recently visited (past 14 days) areas where COVID-19 is spreading",
        "prePt1": "Follow the guidance outlined above.",
        "prePt2": "Stay at home if you begin to feel unwell, even with mild symptoms such as headache and slight runny nose, until you recover. Why? Avoiding contact with others and visits to medical facilities will allow these facilities to operate more effectively and help protect you and others from possible COVID-19 and other viruses.",
        "prePt3": "If you develop symptoms, Call in advance and tell your provider of any recent travel or contact with travelers.Why? Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also help to prevent possible spread of COVID-19 and other viruses.",
        "info": "*This list is not all inclusive. Please consult your medical provider for any other symptoms that are severe or concerning.",
      },
      "hi": {
        "care": "ध्यान",
         "hindi": "हिंदी",
         "title": "कोरोनावायरस रोग 2019 (COVID-19)",
         "symptom": "लक्षण",
         "symNote": "अपने चिकित्सक को कॉल करें: यदि आपको लगता है कि आप COVID-19 की चपेट में है और कुछ लक्षण विकसित होते हैं, जैसे कि बुखार, खांसी या साँस लेने में कठिनाई, तो चिकित्सा सलाह के लिए अपने स्वास्थ्य सेवा प्रदाता को कॉल करें।",
          "symWatch": "लक्षणों के लिए देखें",
          "symReport": "रिपोर्ट की गई बीमारी हल्के लक्षणों से लेकर गंभीर बीमारी तक होती है और कोरोनोवायरस बीमारी 2019 (COVID-19) के मामलों में मौत हुई है।",
          "symPoints": "निम्नलिखित लक्षण चपेट में आने के कुछ दिनों बाद दिखाई दे सकते हैं। *",
          "fever": "बुखार",
          "cough": "खांसी",
          "breath": "साँसों की कमी",
          "symSign": "यदि आप COVID-19 के लिए आपातकालीन चेतावनी संकेत विकसित करते हैं तो तुरंत चिकित्सा प्राप्त करें। आपातकालीन चेतावनी के संकेतों में शामिल हैं:",
          "pt1": "सांस लेने में तकलीफ या सांस की तकलीफ",
          "pt2": "छाती में लगातार दर्द या दबाव",
          "pt3": "नया भ्रम या आक्रोश असमर्थता",
          "pt4": "नीले होंठ या चेहरा",
          "precaution": "सावधानियां",
          "preNote": "COVID-19 के प्रकोप की नवीनतम जानकारी से अवगत रहें, ज्यादातर लोग हल्के संक्रमित अनुभव करते  है। और ठीक हो जाते हैं, लेकिन यह दूसरों के लिए अधिक गंभीर हो सकता है। अपने स्वास्थ्य का ध्यान रखें और निम्न कार्य करके दूसरों की रक्षा करें:",
          "preDo": "आप क्या कर सकते है",
          "preWash": "बार-बार हाथ धोएं",
          "preWashNote": "सैनिटाइजर से अपने हाथों को नियमित और अच्छी तरह से साफ करें या उन्हें साबुन और पानी से धोएं।",
          "preWhy": "क्यों?",
          "preWashWhy": " हाथों को साबुन और पानी या सैनिटाइजर से धोना उस वायरस को मारता है जो आपके हाथों पर हो सकते हैं।",
          "preSocial": "सामाजिक दूरी बनाए रखें",
          "preSocialNote": "कम से कम 1 मीटर (3 फीट) की दूरी बनाए रखें यदि आपके पास कोई खांस या छींक रहा हो।",
          "preSocialWhy": " जब किसी को खांसी या छींक आती है तो वे अपनी नाक या मुंह से छोटी तरल बूंदें छिड़कते हैं जिनमें वायरस हो सकता है। यदि आप बहुत करीब हैं, तो तरल बूंदें आपकी सांस में जा सकती हैं, जिसमें COVID-19 वायरस भी शामिल है यदि खांसी या छींकने करने वाले व्यक्ति को यह बीमारी है।",
          "preAvoid": "आंखों, नाक और मुंह को छूने से बचें",
          "preAvoidWhy": "हाथ कई सतहों को छूते हैं और वायरस उठा सकते हैं। एक बार दूषित होने पर, हाथ वायरस को आपकी आंखों, नाक या मुंह में स्थानांतरित कर सकते हैं। वहां से, वायरस आपके शरीर में प्रवेश कर सकता है और आपको बीमार कर सकता है।",
          "prePractice": "श्वसन स्वच्छता का अभ्यास करें",
          "prePracticeNote": "सुनिश्चित करें कि आप, और आपके आस-पास के लोग, अच्छी श्वसन स्वच्छता का पालन करें। इसका मतलब है खांसी या छींक आने पर अपनी मुड़ी हुई कोहनी या रूमाल से अपने मुंह और नाक को ढंकना। फिर इस्तेमाल किए गए रूमाल का तुरंत निपटान करें।",
          "prePracticeWhy": "बूंदों से वायरस फैलता है। अच्छी श्वसन स्वच्छता का पालन करके आप अपने आसपास के लोगों को सर्दी, फ्लू और COVID​​-19 जैसे वायरस से बचाते हैं।",
          "preHome": "यदि आप अस्वस्थ महसूस करते हैं तो घर पर रहें।",
          "preHomeNote": "यदि आपको बुखार, खांसी और सांस लेने में कठिनाई है, तो चिकित्सा पर ध्यान दें और पहले से फोन करें। अपने स्थानीय स्वास्थ्य प्राधिकरण के निर्देशों का पालन करें।",
          "preHomeWhy": "आपके क्षेत्र की स्थिति की ताजा जानकारी राष्ट्रीय और स्थानीय अधिकारियों के पास सबसे अधिक होगी। अग्रिम में कॉल करने से आपका स्वास्थ्य देखभाल प्रदाता आपको जल्दी से सही स्वास्थ्य सुविधा के लिए निर्देशित कर सकेगा। यह आपकी रक्षा भी करेगा और वायरस और अन्य संक्रमणों को फैलने से रोकने में मदद करेगा। सूचित रहें और अपने स्वास्थ्य सेवा प्रदाता द्वारा दी गई सलाह का पालन करें।",
          "preSign": "उन व्यक्तियों के लिए सुरक्षा उपाय जो हाल ही में (पिछले 14 दिनों में) क्षेत्रों में गए हैं जहां COVID-19 फैल रहा है।",
          "prePt1": "ऊपर उल्लिखित मार्गदर्शन का पालन करें।",
          "prePt2": "हल्के लक्षण जैसे सिरदर्द और हल्की नाक बहना शुरू हो तो घर पर रहें जब तक आप ठीक न हो जाएं, क्यों? दूसरों के साथ संपर्क ना बनायें और चिकित्सा सुविधाओं का दौरा करने से ये सुविधाएं अधिक प्रभावी ढंग से संचालित हो सकेंगी और आपको और अन्य को संभव COVID-19 और अन्य वायरस से बचाने में मदद मिलेगी।",
          "prePt3": "यदि आप लक्षण विकसित करते हैं, तो पहले से कॉल करें और अपने प्रदाता को किसी भी हाल की यात्रा के बारे में या यात्रियों से संपर्क के बारे में बताएं। अग्रिम में कॉल करने से आपका स्वास्थ्य देखभाल प्रदाता आपको जल्दी से सही स्वास्थ्य सुविधा के लिए निर्देशित कर सकेगा। यह COVID-19 और अन्य वायरस के संभावित प्रसार को रोकने में भी मदद करेगा।",
          "info": "*यह सूची सब समावेशी नहीं है। किसी भी अन्य लक्षणों के लिए कृपया अपने चिकित्सा प्रदाता से परामर्श करें जो गंभीर या संबंधित हैं।",
    },
    "pb": {
      "care": "ਧਿਆਨ",
      "title": "ਕੋਰੋਨਾਵਾਇਰਸ ਬਿਮਾਰੀ 2019 (ਕੋਵੀਡ -19)",
      "symptom": "ਲੱਛਣ",
      "symNote": "ਆਪਣੇ ਡਾਕਟਰ ਨੂੰ ਕਾਲ ਕਰੋ ਜੇ ਤੁਸੀਂ ਮਹਿਸੂਸ ਕਰਦੇ ਹੋ ਕਿ ਤੁਸੀਂ ਕੋਵਿਡ -19 ਦੇ ਕਮਜ਼ੋਰ ਹੋ ਅਤੇ ਕੁਝ ਲੱਛਣ ਪੈਦਾ ਹੋ ਜਾਂਦੇ ਹਨ, ਜਿਵੇਂ ਕਿ ਬੁਖਾਰ, ਖੰਘ ਜਾਂ ਸਾਹ ਲੈਣ ਵਿੱਚ ਮੁਸ਼ਕਲ, ਤਾਂ ਡਾਕਟਰੀ ਸਲਾਹ ਲਈ ਆਪਣੇ ਸਿਹਤ-ਸੰਭਾਲ ਪ੍ਰਦਾਤਾ ਨੂੰ ਕਾਲ ਕਰੋ.",
      "symWatch": "ਲੱਛਣਾਂ ਲਈ ਵੇਖੋ",
      "symReport": "ਰਿਪੋਰਟ ਕੀਤੀ ਬਿਮਾਰੀ ਹਲਕੇ ਲੱਛਣਾਂ ਤੋਂ ਲੈ ਕੇ ਗੰਭੀਰ ਬਿਮਾਰੀ ਤੱਕ ਹੈ ਅਤੇ ਕੋਰਨੋਵਾਇਰਸ ਬਿਮਾਰੀ 2019 (ਸੀਓਵੀਆਈਡੀ -19) ਦੇ ਮਾਮਲਿਆਂ ਵਿੱਚ ਮੌਤ ਹੋਈ ਹੈ.",
      "symPoints": "ਹੇਠਾਂ ਦਿੱਤੇ ਲੱਛਣ ਧੱਫੜ ਦੇ ਕੁਝ ਦਿਨਾਂ ਬਾਅਦ ਪ੍ਰਗਟ ਹੋ ਸਕਦੇ ਹਨ. *",
      "fever": "ਬੁਖਾਰ",
      "cough": "ਖੰਘ",
      "breath": "ਸਾਹ ਚੜ੍ਹਦਾ",
      "symSign": "ਜੇ ਤੁਸੀਂ ਕੋਵਿਡ -19 ਲਈ ਸੰਕਟਕਾਲੀ ਚਿਤਾਵਨੀ ਦੇ ਚਿੰਨ੍ਹ ਦਾ ਵਿਕਾਸ ਕਰਦੇ ਹੋ ਤਾਂ ਤੁਰੰਤ ਡਾਕਟਰੀ ਸਹਾਇਤਾ ਪ੍ਰਾਪਤ ਕਰੋ. ਐਮਰਜੈਂਸੀ ਚੇਤਾਵਨੀ ਸੰਕੇਤਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ:",
      "pt1": "ਸਾਹ ਚੜ੍ਹਨਾ ਜਾਂ ਸਾਹ ਚੜ੍ਹਨਾ",
      "pt2": "ਲਗਾਤਾਰ ਛਾਤੀ ਵਿੱਚ ਦਰਦ ਜਾਂ ਦਬਾਅ",
      "pt3": "ਨਵੀਂ ਗਲਤ",
      "pt4": "ਨੀਲੇ ਬੁੱਲ੍ਹ ਜਾਂ ਚਿਹਰਾ",
      "precaution": "ਸਾਵਧਾਨੀਆਂ",
      "preNote": "COVID-19 ਦੇ ਫੈਲਣ ਤੇ ਤਾਜ਼ਾ ਜਾਣਕਾਰੀ ਤੋਂ ਸੁਚੇਤ ਰਹੋ, ਬਹੁਤੇ ਲੋਕ ਹਲਕੇ ਤੌਰ ਤੇ ਲਾਗ ਲੱਗਦੇ ਹਨ. ਅਤੇ ਮੁੜ ਪ੍ਰਾਪਤ ਕਰੋ, ਪਰ ਇਹ ਦੂਜਿਆਂ ਲਈ ਵਧੇਰੇ ਗੰਭੀਰ ਹੋ ਸਕਦਾ ਹੈ. ਆਪਣੀ ਸਿਹਤ ਦਾ ਖਿਆਲ ਰੱਖੋ ਅਤੇ ਹੇਠ ਲਿਖੀਆਂ ਗੱਲਾਂ ਕਰਕੇ ਦੂਸਰਿਆਂ ਦੀ ਰੱਖਿਆ ਕਰੋ:",
      "preDo": "ਤੁਸੀਂ ਕੀ ਕਰ ਸਕਦੇ ਹੋ",
      "preWash": "ਅਕਸਰ ਹੱਥ ਧੋਵੋ",
      "preWashNote": "ਆਪਣੇ ਹੱਥਾਂ ਨੂੰ ਨਿਯਮਤ ਅਤੇ ਚੰਗੀ ਤਰ੍ਹਾਂ ਸੈਨੀਟਾਈਜ਼ਰ ਨਾਲ ਚੰਗੀ ਤਰ੍ਹਾਂ ਸਾਫ਼ ਕਰੋ ਜਾਂ ਉਨ੍ਹਾਂ ਨੂੰ ਸਾਬਣ ਅਤੇ ਪਾਣੀ ਨਾਲ ਧੋਵੋ.",
      "preWhy": "ਕਿਉਂ?",
      "preWashWhy": "ਹੱਥਾਂ ਨੂੰ ਸਾਬਣ ਅਤੇ ਪਾਣੀ ਨਾਲ ਧੋਣ ਨਾਲ ਜਾਂ ਉਹ ਵਾਇਰਸ ਖਤਮ ਹੋ ਜਾਂਦੇ ਹਨ ਜੋ ਤੁਹਾਡੇ ਹੱਥਾਂ ਤੇ ਹੋ ਸਕਦੇ ਹਨ.",
      "preSocial": "ਸਮਾਜਿਕ ਦੂਰੀ ਬਣਾਈ ਰੱਖੋ",
      "preSocialNote": "ਜੇ ਤੁਹਾਨੂੰ ਖੰਘ ਜਾਂ ਛਿੱਕ ਆਉਂਦੀ ਹੈ, ਤਾਂ ਘੱਟੋ ਘੱਟ 1 ਮੀਟਰ (3 ਫੁੱਟ) ਦੀ ਦੂਰੀ ਰੱਖੋ.",
      "preSocialWhy": "ਜਦੋਂ ਕੋਈ ਖਾਂਸੀ ਖਾਂਦਾ ਹੈ ਜਾਂ ਛਿੱਕ ਮਾਰਦਾ ਹੈ ਤਾਂ ਉਹ ਆਪਣੇ ਨੱਕ ਜਾਂ ਮੂੰਹ ਵਿੱਚੋਂ ਛੋਟੇ ਤਰਲ ਬੂੰਦਾਂ ਛਿੜਕਦੇ ਹਨ ਜਿਸ ਵਿੱਚ ਵਾਇਰਸ ਹੋ ਸਕਦਾ ਹੈ. ਜੇ ਤੁਸੀਂ ਬਹੁਤ ਨਜ਼ਦੀਕ ਹੋ, ਤਰਲ ਬੂੰਦਾਂ ਤੁਹਾਡੇ ਸਾਹ ਵਿੱਚ ਜਾ ਸਕਦੀਆਂ ਹਨ, ਜਿਸ ਵਿੱਚ COVID-19 ਵਿਸ਼ਾਣੂ ਵੀ ਸ਼ਾਮਲ ਹੈ ਜੇ ਖੰਘ ਜਾਂ ਛਿੱਕਣ ਵਾਲੇ ਵਿਅਕਤੀ ਨੂੰ ਬਿਮਾਰੀ ਹੈ.",
      "preAvoid": "ਅੱਖਾਂ, ਨੱਕ ਅਤੇ ਮੂੰਹ ਨੂੰ ਛੂਹਣ ਤੋਂ ਬਚੋ",
      "preAvoidWhy": "ਹੱਥ ਬਹੁਤ ਸਾਰੀਆਂ ਸਤਹਾਂ ਨੂੰ ਛੂੰਹਦੇ ਹਨ ਅਤੇ ਵਾਇਰਸਾਂ ਨੂੰ ਚੁਣ ਸਕਦੇ ਹਨ. ਇਕ ਵਾਰ ਦੂਸ਼ਿਤ ਹੋ ਜਾਣ ਤੋਂ ਬਾਅਦ, ਹੱਥ ਵਾਇਰਸ ਤੁਹਾਡੀਆਂ ਅੱਖਾਂ, ਨੱਕ ਜਾਂ ਮੂੰਹ ਵਿਚ ਤਬਦੀਲ ਕਰ ਸਕਦੇ ਹਨ. ਉੱਥੋਂ, ਵਾਇਰਸ ਤੁਹਾਡੇ ਸਰੀਰ ਵਿਚ ਦਾਖਲ ਹੋ ਸਕਦੇ ਹਨ ਅਤੇ ਤੁਹਾਨੂੰ ਬਿਮਾਰ ਬਣਾ ਸਕਦੇ ਹਨ.",
      "prePractice": "ਸਾਹ ਦੀ ਸਫਾਈ ਦਾ ਅਭਿਆਸ ਕਰੋ",
      "prePracticeNote": "ਇਹ ਸੁਨਿਸ਼ਚਿਤ ਕਰੋ ਕਿ ਤੁਸੀਂ ਅਤੇ ਤੁਹਾਡੇ ਆਸ ਪਾਸ ਦੇ ਲੋਕ ਸਾਹ ਦੀ ਚੰਗੀ ਸਫਾਈ ਦਾ ਪਾਲਣ ਕਰਦੇ ਹਨ. ਇਸਦਾ ਅਰਥ ਹੈ ਖੰਘਣ ਜਾਂ ਛਿੱਕ ਆਉਣ ਵੇਲੇ ਤੁਹਾਡੇ ਮੂੰਹ ਅਤੇ ਨੱਕ ਨੂੰ ਆਪਣੀ ਝੁਕਿਆ ਕੂਹਣੀ ਜਾਂ ਰੁਮਾਲ ਨਾਲ coveringੱਕਣਾ. ਫਿਰ ਤੁਰੰਤ ਵਰਤੇ ਜਾਂਦੇ ਰੁਮਾਲ ਨੂੰ ਕੱ disp ਦਿਓ.",
      "prePracticeWhy": "ਵਾਇਰਸ ਬੂੰਦਾਂ ਨਾਲ ਫੈਲਦਾ ਹੈ. ਸਾਹ ਦੀ ਚੰਗੀ ਸਿਹਤ ਦਾ ਪਾਲਣ ਕਰਦਿਆਂ, ਤੁਸੀਂ ਆਪਣੇ ਆਲੇ ਦੁਆਲੇ ਦੇ ਲੋਕਾਂ ਨੂੰ ਵਾਇਰਸਾਂ ਤੋਂ ਬਚਾਉਂਦੇ ਹੋ ਜਿਵੇਂ ਕਿ ਜ਼ੁਕਾਮ, ਫਲੂ ਅਤੇ ਕੋਵਿਡ -19.",
      "preHome": "ਜੇ ਤੁਸੀਂ ਬੀਮਾਰ ਮਹਿਸੂਸ ਕਰਦੇ ਹੋ ਤਾਂ ਘਰ ਰਹੋ.",
      "preHomeNote": "ਜੇ ਤੁਹਾਨੂੰ ਬੁਖਾਰ, ਖਾਂਸੀ, ਅਤੇ ਸਾਹ ਲੈਣ ਵਿੱਚ ਮੁਸ਼ਕਲ ਆਉਂਦੀ ਹੈ, ਤਾਂ ਥੈਰੇਪੀ ਵੱਲ ਧਿਆਨ ਦਿਓ ਅਤੇ ਪਹਿਲਾਂ ਤੋਂ ਕਾਲ ਕਰੋ. ਆਪਣੇ ਸਥਾਨਕ ਸਿਹਤ ਅਥਾਰਟੀ ਦੀਆਂ ਹਦਾਇਤਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ.",
      "preHomeWhy": "ਰਾਸ਼ਟਰੀ ਅਤੇ ਸਥਾਨਕ ਅਧਿਕਾਰੀਆਂ ਕੋਲ ਤੁਹਾਡੇ ਖੇਤਰ ਦੀ ਸਥਿਤੀ ਬਾਰੇ ਸਭ ਤੋਂ ਵੱਧ ਜਾਣਕਾਰੀ ਹੋਵੇਗੀ. ਪਹਿਲਾਂ ਤੋਂ ਕਾਲ ਕਰਨਾ ਤੁਹਾਡੇ ਸਿਹਤ ਦੇਖਭਾਲ ਪ੍ਰਦਾਤਾ ਨੂੰ ਤੁਰੰਤ ਤੁਹਾਨੂੰ ਸਹੀ ਸਿਹਤ ਸੰਭਾਲ ਸਹੂਲਤ ਵੱਲ ਭੇਜਣ ਦੀ ਆਗਿਆ ਦੇਵੇਗਾ. ਇਹ ਤੁਹਾਡੀ ਰੱਖਿਆ ਕਰੇਗਾ ਅਤੇ ਵਾਇਰਸਾਂ ਅਤੇ ਹੋਰ ਲਾਗਾਂ ਦੇ ਫੈਲਣ ਨੂੰ ਰੋਕਣ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰੇਗਾ. ਸੁਚੇਤ ਰਹੋ ਅਤੇ ਆਪਣੇ ਸਿਹਤ ਸੰਭਾਲ ਪ੍ਰਦਾਤਾ ਦੁਆਰਾ ਦਿੱਤੀ ਸਲਾਹ ਦੀ ਪਾਲਣਾ ਕਰੋ.",
      "preSign": "ਉਹਨਾਂ ਵਿਅਕਤੀਆਂ ਲਈ ਸੁਰੱਖਿਆ ਉਪਾਅ ਜਿਨ੍ਹਾਂ ਨੇ ਹਾਲ ਹੀ ਵਿੱਚ (ਪਿਛਲੇ 14 ਦਿਨਾਂ ਵਿੱਚ) ਉਨ੍ਹਾਂ ਖੇਤਰਾਂ ਦਾ ਦੌਰਾ ਕੀਤਾ ਜਿਥੇ ਸੀ.ਓ.ਆਈ.ਵੀ.ਡੀ.-19 ਫੈਲ ਰਿਹਾ ਹੈ.",
      "prePt1": "ਉੱਪਰ ਦੱਸੇ ਮਾਰਗ ਦਰਸ਼ਨ ਦੀ ਪਾਲਣਾ ਕਰੋ.",
      "prePt2": "ਹਲਕੇ ਲੱਛਣ ਜਿਵੇਂ ਕਿ ਸਿਰਦਰਦ ਅਤੇ ਹਲਕੇ ਵਗਦੇ ਨੱਕ ਸ਼ੁਰੂ ਹੁੰਦੇ ਹਨ, ਇਸ ਲਈ ਜਦੋਂ ਤੱਕ ਤੁਸੀਂ ਠੀਕ ਨਹੀਂ ਹੁੰਦੇ, ਘਰ ਰਹੋ, ਕਿਉਂ? ਦੂਜਿਆਂ ਨਾਲ ਸੰਪਰਕ ਕਰਨ ਤੋਂ ਪਰਹੇਜ਼ ਕਰਨਾ ਅਤੇ ਡਾਕਟਰੀ ਸਹੂਲਤਾਂ ਦਾ ਦੌਰਾ ਕਰਨਾ ਇਨ੍ਹਾਂ ਸਹੂਲਤਾਂ ਨੂੰ ਵਧੇਰੇ ਪ੍ਰਭਾਵਸ਼ਾਲੀ operateੰਗ ਨਾਲ ਚਲਾਉਣ ਦੇ ਯੋਗ ਬਣਾਏਗਾ ਅਤੇ ਤੁਹਾਨੂੰ ਅਤੇ ਦੂਜਿਆਂ ਨੂੰ COVID-19 ਅਤੇ ਹੋਰ ਵਾਇਰਸਾਂ ਤੋਂ ਬਚਾਉਣ ਵਿਚ ਸਹਾਇਤਾ ਕਰੇਗਾ.",
      "prePt3": "ਜੇ ਤੁਸੀਂ ਲੱਛਣਾਂ ਦਾ ਵਿਕਾਸ ਕਰਦੇ ਹੋ, ਤਾਂ ਪਹਿਲਾਂ ਹੀ ਕਾਲ ਕਰੋ ਅਤੇ ਆਪਣੇ ਪ੍ਰਦਾਤਾ ਨੂੰ ਕਿਸੇ ਵੀ ਤਾਜ਼ਾ ਯਾਤਰਾ ਜਾਂ ਮੁਸਾਫਰਾਂ ਨਾਲ ਸੰਪਰਕ ਬਾਰੇ ਦੱਸੋ. ਪਹਿਲਾਂ ਤੋਂ ਕਾਲ ਕਰਨਾ ਤੁਹਾਡੇ ਸਿਹਤ ਦੇਖਭਾਲ ਪ੍ਰਦਾਤਾ ਨੂੰ ਤੁਰੰਤ ਤੁਹਾਨੂੰ ਸਹੀ ਸਿਹਤ ਸੰਭਾਲ ਸਹੂਲਤ ਵੱਲ ਭੇਜਣ ਦੀ ਆਗਿਆ ਦੇਵੇਗਾ. ਇਹ COVID-19 ਅਤੇ ਹੋਰ ਵਾਇਰਸਾਂ ਦੇ ਸੰਭਾਵਤ ਫੈਲਣ ਨੂੰ ਰੋਕਣ ਵਿੱਚ ਵੀ ਸਹਾਇਤਾ ਕਰੇਗਾ.",
      "info": "* ਇਹ ਸੂਚੀ ਸਾਰੇ ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ. ਕਿਸੇ ਵੀ ਹੋਰ ਲੱਛਣ ਜੋ ਗੰਭੀਰ ਜਾਂ ਸੰਬੰਧਿਤ ਹਨ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਮੈਡੀਕਲ ਪ੍ਰਦਾਤਾ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    }

    }
    }
}
