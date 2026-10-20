import { EmergencyCard, PhraseItem, EmergencyHotline } from '../types/emergency';

export const EMERGENCY_CARDS: EmergencyCard[] = [
  {
    id: 'jellyfish',
    nameTh: 'แมงกะพรุนกล่อง',
    nameEn: 'Box Jellyfish',
    icon: '🪼',
    tagTh: 'พิษสัตว์อันตรายถึงชีวิต',
    goldenHour: 'นาทีวิกฤต (Golden Hour)',
    severity: 'critical',
    heroImage: '/assets/aistudio/vinegar_beach_step.jpg',
    heroImageCaption: 'ราดน้ำส้มสายชูต่อเนื่อง 30 วินาทียับยั้งเข็มพิษที่ยังไม่แตก',
    translations: {
      EN: {
        title: 'CRITICAL INSTRUCTION FOR VICTIM',
        criticalInstruction: 'POUR VINEGAR ON WOUND IMMEDIATELY FOR AT LEAST 30 SECONDS. DO NOT USE FRESH WATER. DO NOT RUB!',
        phoneticThai: '"พัวร์ วินิการ์ ออน วูนด์ อิมมีเดียทลี ฟอร์ แอท ลีสต์ เทอร์รี่ เซเคนด์ส. ดู น็อท ยูส เฟรช วอเทอร์. ดู น็อท รับ!"',
        meaningThai: 'ให้นิ่งๆ ไว้ จะราดน้ำส้มสายชูใส่แผลอย่างน้อย 30 วินาที ห้ามใช้น้ำเปล่า และห้ามถูแผลเด็ดขาด',
        warningNote: 'Vinegar deactivates unfired nematocysts. Fresh water causes rapid discharge of toxins.'
      },
      中文: {
        title: '伤员紧急警示 (CRITICAL INSTRUCTION)',
        criticalInstruction: '立即用醋持续冲洗伤口至少30秒！绝对严禁使用淡水！切勿揉搓伤口！',
        phoneticThai: '"ลี่ จี๋ ย่ง ชู่ ชง สี่ ซาง โข่ว จื้อ เส่า ซาน สือ เหมี่ยว! เจวี๋ย ต้วย เหยียน จิ้น ย่ง ต้าน สุ่ย!"',
        meaningThai: 'ใช้น้ำส้มสายชูราดต่อเนื่อง 30 วินาที ห้ามใช้น้ำจืดล้าง ห้ามขยี้แผล',
        warningNote: '食醋可钝化未激发的刺丝囊，淡水会引发剧烈毒素释放。'
      },
      RU: {
        title: 'КРИТИЧЕСКАЯ ИНСТРУКЦИЯ (CRITICAL INSTRUCTION)',
        criticalInstruction: 'НЕМЕДЛЕННО ПОЛИВАЙТЕ РАНУ УКСУСОМ НЕ МЕНЕЕ 30 СЕКУНД. НЕ ИСПОЛЬЗУЙТЕ ПРЕСНУЮ ВОДУ. НЕ ТРИТЕ!',
        phoneticThai: '"นีมีดเลียนนา ปาลิวายเตีย รานู อุคซูซัม นี เมนียี ทริตซัท ซิคูนด. นี อิสปอลซุยเตีย เปรสนูยู วอดดู!"',
        meaningThai: 'ราดน้ำส้มสายชูทันทีอย่างน้อย 30 วินาที ห้ามใช้น้ำจืด ห้ามถูแผล',
        warningNote: 'Уксус нейтрализует стрекательные клетки. Пресная вода стимулирует впрыск яда.'
      },
      DE: {
        title: 'KRITISCHE ANWEISUNG FÜR DAS OPFER',
        criticalInstruction: 'WUNDE SOFORT MINDESTENS 30 SEKUNDEN LANG MIT ESSIG SPÜLEN. KEIN SÜSSWASSER VERWENDEN. NICHT REIBEN!',
        phoneticThai: '"วุนเดอ โซฟอร์ท มินเดสเทนส์ ดรายซิช เซคุนเดิน ลัง มิท เอสซิช ชปือเลน. ไคน์ ซืสส์วาสเซอร์ แฟร์เวนเดน. นิคท์ ไรเบน!"',
        meaningThai: 'ราดน้ำส้มสายชูใส่แผลอย่างน้อย 30 วินาที ห้ามใช้น้ำเปล่า ห้ามถู',
        warningNote: 'Essig deaktiviert Nesselkapseln. Süßwasser löst massiven Giftaustritt aus.'
      },
      JA: {
        title: '被害者への緊急指示 (CRITICAL INSTRUCTION)',
        criticalInstruction: '直ちに酢を傷口に最低30秒間かけ続けてください。真水は絶対に使用しないでください。擦らないでください！',
        phoneticThai: '"ทาดาชินิ สุ โอะ คิซุกุจินิ ไซเท ซังจึบเบียวคัง คาเคะซึซึเคเตะ คุดาไซ. มะมิซุ วะ เซ็ตไต นิ ชิโย ชิไนเดะ คุดาไซ!"',
        meaningThai: 'ราดน้ำส้มสายชูอย่างน้อย 30 วินาที ห้ามใช้น้ำจืด ห้ามถูแผล',
        warningNote: '酢は未発射の刺胞を不活性化します。真水は毒素の放出を誘発します。'
      }
    },
    stepsTh: [
      {
        id: 1,
        title: 'ราดน้ำส้มสายชูอย่างน้อย 30 วินาที',
        desc: 'เทราดจุดที่สัมผัสต่อเนื่อง ห้ามขัดถู ห้ามดึงสายด้วยมือเปล่า ให้ใช้คีบหรือถุงมือคีบออกหลังจากราดแล้วเท่านั้น'
      },
      {
        id: 2,
        title: 'โทร 1669 ส่งโรงพยาบาลทันที',
        desc: 'พิษแมงกะพรุนกล่องส่งผลต่อระบบหัวใจและกล้ามเนื้อ ภายใน 2-10 นาที ต้องพาเข้าไอซียูโดยเร็วที่สุด'
      },
      {
        id: 3,
        title: 'สังเกตชีพจร / เตรียมทำ CPR',
        desc: 'หากผู้ป่วยหมดสติหรือไม่หายใจ ให้เริ่มกดหน้าอกปั๊มหัวใจ CPR ทันทีโดยไม่ต้องรอน้ำส้มสายชู'
      }
    ],
    dontsTh: [
      'ห้ามล้างด้วยน้ำจืด / น้ำดื่ม / แอลกอฮอล์: น้ำจืดมีแรงดันออสโมซิสทำให้ถุงพิษ (Nematocysts) แตกและปล่อยพิษเข้าสู่กระแสเลือดเพิ่มขึ้นทันที',
      'ห้ามขัดถูด้วยทรายหรือผ้าเด็ดขาด: การเสียดสีจะกดแทงเข็มพิษลึกเข้าไปในเนื้อเยื่อมากขึ้น'
    ]
  },
  {
    id: 'snake',
    nameTh: 'งูพิษกัด',
    nameEn: 'Venomous Snake',
    icon: '🐍',
    tagTh: 'พิษสัตว์อันตรายถึงชีวิต',
    goldenHour: 'นาทีวิกฤต (รีบดามและส่ง รพ.)',
    severity: 'critical',
    heroImage: '/assets/aistudio/Image_14_57467ec4.jpeg',
    heroImageCaption: 'การดามตรึงอวัยวะ (Immobilization) ให้อยู่นิ่งระดับต่ำกว่าหัวใจ',
    translations: {
      EN: {
        title: 'CRITICAL INSTRUCTION FOR SNAKE BITE',
        criticalInstruction: 'STAY CALM AND IMMOBILIZE YOUR LIMB. DO NOT MOVE, DO NOT SUCK VENOM, DO NOT CUT THE WOUND!',
        phoneticThai: '"สเตย์ คาล์ม แอนด์ อิมโมบิไลซ์ ยัวร์ ลิมบ์. ดู น็อท มูฟ, ดู น็อท ซัค เวนอม, ดู น็อท คัท เดอะ วูนด์!"',
        meaningThai: 'ให้นิ่งที่สุด อย่าขยับอวัยวะที่ถูกกัด ห้ามดูดพิษ ห้ามกรีดแผลเด็ดขาด',
        warningNote: 'Movement accelerates venom spread through the lymphatic system.'
      },
      中文: {
        title: '毒蛇咬伤紧急指示 (SNAKE BITE)',
        criticalInstruction: '请保持平静并固定受伤肢体！绝对不要跑动，严禁切开伤口，严禁吮吸毒液！',
        phoneticThai: '"ฉิ่ง เป่า ฉือ ผิง จิ้ง ปิ้ง กู้ ติ้ง โซ่ว ซาง จือ ถี่! เจวี๋ย ปู้ เหยา เผ่า ต้ง, เหยียน จิ้น เชี่ย คาย ซาง โข่ว!"',
        meaningThai: 'ทำใจให้สงบ อยู่นิ่งๆ ดามอวัยวะที่โดนกัด ห้ามดูดพิษ ห้ามกรีดแผล',
        warningNote: '剧烈运动会加速毒液经淋巴系统扩散。'
      },
      RU: {
        title: 'ИНСТРУКЦИЯ ПРИ УКУСЕ ЗМЕИ',
        criticalInstruction: 'СОХРАНЯЙТЕ СПОКОЙСТВИЕ И ОБЕЗДВИЖЬТЕ КОНЕЧНОСТЬ! НЕ БЕГАЙТЕ, НЕ ОТСАСЫВАЙТЕ ЯД, НЕ ДЕЛАЙТЕ РАЗРЕЗОВ!',
        phoneticThai: '"ซาครานไยเตีย สปาโคยสเตวีย อี อาเบซดวิจเตีย คาเนชนอสต์! นี เบไกเตีย, นี อัทซาซิวายเตีย ยัด!"',
        meaningThai: 'อยู่นิ่งๆ ดามแขนขา ห้ามวิ่ง ห้ามดูดพิษ ห้ามกรีดแผล',
        warningNote: 'Движение ускоряет всасывание яда лимфатической системой.'
      },
      DE: {
        title: 'NOTFALLANWEISUNG SCHLANGENBISS',
        criticalInstruction: 'RUHIG BLEIBEN UND DIE GLIEDMASSE RUHIGSTELLEN! NICHT BEWEGEN, KEIN GIFT AUSSAUGEN, NICHT EINSCHNEIDEN!',
        phoneticThai: '"รูฮิช ไบลเบน อุนด์ ดี กลีดมัสเซอ รูฮิชชเตลเลน! นิคท์ เบเวเกน, ไคน์ กิฟท์ เอาส์เซาเกิน!"',
        meaningThai: 'อยู่นิ่งๆ ดามอวัยวะ ห้ามขยับ ห้ามดูดพิษเด็ดขาด',
        warningNote: 'Bewegung beschleunigt die Ausbreitung des Giftes.'
      },
      JA: {
        title: '毒ヘビ咬傷 緊急指示',
        criticalInstruction: '落ち着いて患部を固定し、動かないでください。毒を吸い出したり、傷口を切開しないでください！',
        phoneticThai: '"โอจิทสึอิเตะ คัมบุ โอะ โคเทอิชิ, อูโงคาไนเดะ คุดาไซ. โดคุ โอะ ซุยดะชิตาริ, คิซุกุจิ โอะ เซ็กไค ชิไนเดะ คุดาไซ!"',
        meaningThai: 'สงบสติอารมณ์ ดามอวัยวะให้อยู่นิ่ง ห้ามดูดพิษ ห้ามกรีดแผล',
        warningNote: '激しい運動は毒の全身拡散を早めます。'
      }
    },
    stepsTh: [
      {
        id: 1,
        title: 'ล้างแผลด้วยน้ำสะอาดและสบู่อ่อนๆ',
        desc: 'เช็ดให้แห้งอย่างเบามือ ห้ามบีบเค้น ห้ามกรีดเปิดแผล ห้ามใช้น้ำแข็งประคบ'
      },
      {
        id: 2,
        title: 'ดามอวัยวะให้อยู่นิ่ง (Immobilization)',
        desc: 'ใช้ไม้ดามและผ้าพันไว้ให้อยู่นิ่งเหมือนแขนขาหัก ให้อวัยวะอยู่ต่ำกว่าระดับหัวใจ'
      },
      {
        id: 3,
        title: 'ถ่ายภาพงู (ถ้าปลอดภัย) และโทร 1669 / 1367',
        desc: 'จดจำสี ขนาด ลวดลาย เพื่อให้แพทย์ รพ. เตรียมเซรุ่มแก้พิษงูได้ตรงชนิด'
      }
    ],
    dontsTh: [
      'ห้ามขันชะเนาะหรือรัดแน่น',
      'ห้ามใช้ปากดูดพิษ หรือกรีดแผล: เพิ่มโอกาสติดเชื้อรุนแรงและพิษอาจเข้าสู่ผู้ปฐมพยาบาลทางแผลในปาก'
    ]
  },
  {
    id: 'cpr',
    nameTh: 'หมดสติ / หัวใจหยุดเต้น',
    nameEn: 'Cardiac Arrest & CPR',
    icon: '🫀',
    tagTh: 'นาทีฉุกเฉินช่วยชีวิต',
    goldenHour: 'นาทีวิกฤต (เริ่มใน 4 นาทีแรก)',
    severity: 'critical',
    heroImage: '/assets/aistudio/Image_7_abe770df.jpeg',
    heroImageCaption: 'การกดหน้าอก CPR อัตราเร็ว 100-120 ครั้ง/นาที ร่วมกับเครื่องกระตุกหัวใจ AED',
    translations: {
      EN: {
        title: 'EMERGENCY CPR & AED INSTRUCTION',
        criticalInstruction: 'VICTIM IS UNRESPONSIVE. CALL 1669 AND GET AED IMMEDIATELY. START CHEST COMPRESSIONS FAST AND HARD!',
        phoneticThai: '"วิคทิม อิส อันเรสพอนซีฟ. คอล วัน-ซิกซ์-ซิกซ์-ไนน์ แอนด์ เก็ท เอ อี ดี อิมมีเดียทลี. สตาร์ท เชสต์ คอมเพรชชั่นส์ ฟาสต์ แอนด์ ฮาร์ด!"',
        meaningThai: 'ผู้ป่วยหมดสติไม่หายใจ ให้โทร 1669 และนำเครื่อง AED มาทันที เริ่มปั๊มหัวใจกดหน้าอกแรงและเร็ว',
        warningNote: 'Brain damage begins within 4 minutes of cardiac arrest without CPR.'
      },
      中文: {
        title: '心跳骤停与心肺复苏指示 (CPR & AED)',
        criticalInstruction: '患者失去意识且无正常呼吸！立即呼叫1669并寻找AED！迅速开始心肺复苏胸外按压！',
        phoneticThai: '"ฮว่าน เจ่อ ซือ ชวี่ อี้ ซื่อ เฉี่ย อู๋ เจิ้ง ฉาง หู ซี! ลี่ จี๋ ฮู เจี้ยว อี-ลิ่ว-ลิ่ว-จิ่ว ปิ้ง สวิน เจ่า เออีดี!"',
        meaningThai: 'ผู้ป่วยหมดสติไม่หายใจ รีบโทร 1669 และหาเครื่อง AED เริ่มปั๊มหัวใจทันที',
        warningNote: '心跳停止4分钟后脑细胞将发生不可逆损伤。'
      },
      RU: {
        title: 'ИНСТРУКЦИЯ СЛР И ДЕФИБРИЛЛЯТОР',
        criticalInstruction: 'ПОСТРАДАВШИЙ БЕЗ СОЗНАНИЯ! ЗВОНИТЕ 1669 И НЕСИТЕ ДЕФИБРИЛЛЯТОР AED. НАЧИНАЙТЕ НЕПРЯМОЙ МАССАЖ СЕРДЦА!',
        phoneticThai: '"พัสตราดาฟชีย์ เบซ ซาซนานียา! ซวานีเตีย วัน-ซิกซ์-ซิกซ์-ไนน์ อี เนซีเตีย เอ อี ดี. นาชีนายเตีย มาสซาช แซรต์ซา!"',
        meaningThai: 'ผู้ป่วยหมดสติ โทร 1669 หาเครื่อง AED และเริ่มกดหน้าอกทันที',
        warningNote: 'Без реанимации необратимые повреждения мозга наступают через 4 минуты.'
      },
      DE: {
        title: 'HERZ-LUNGEN-WIEDERBELEBUNG (CPR)',
        criticalInstruction: 'PATIENT IST BEWUSSTLOS! RUFEN SIE 1669, FORDERN SIE EINEN AED AN UND BEGINNEN SIE SOFORT MIT DER HERZDRUCKMASSAGE!',
        phoneticThai: '"พาเชียนท์ อิสท์ เบวุสท์โลส! รูเฟน ซี วัน-ซิกซ์-ซิกซ์-ไนน์ ฟอร์เดิร์น ซี ไอเนน เอ อี ดี อุนด์ เบกินเนน ซี มิท แดร์ แฮร์ซดรุคมัสซาเกะ!"',
        meaningThai: 'ผู้ป่วยหมดสติ โทร 1669 นำเครื่อง AED มา และกดหน้าอกทันที',
        warningNote: 'Gehirnzellen sterben nach 4 Minuten Sauerstoffmangel ab.'
      },
      JA: {
        title: '心肺蘇生とAED緊急指示',
        criticalInstruction: '反応がなく呼吸をしていません！直ちに1669に電話し、AEDを手配して胸骨圧迫を開始してください！',
        phoneticThai: '"ฮันโน กะ นะคุ โคคิว โอะ ชิเตะ อิมาเซน! ทาดาชินิ 1669 นิ เดนวะชิ, เออีดี โอะ เทไฮชิเตะ เคียวโคทสึ อัปปะคุ โอะ ไคชิ ชิเตะ คุดาไซ!"',
        meaningThai: 'ผู้ป่วยหมดสติ โทร 1669 นำ AED มา และเริ่มกดหน้าอกทันที',
        warningNote: '心停止から4分で脳細胞に不可逆的な損傷が始まります。'
      }
    },
    stepsTh: [
      {
        id: 1,
        title: 'ตรวจการตอบสนองและลมหายใจ',
        desc: 'ตบไหล่ทั้งสองข้าง เรียกดังๆ ดูการขยับของหน้าอก ไม่เกิน 10 วินาที'
      },
      {
        id: 2,
        title: 'ตะโกนขอความช่วยเหลือ โทร 1669 และนำ AED มา',
        desc: 'สั่งผู้ช่วยให้ชัดเจน: "คุณช่วยโทร 1669 และไปเอาเครื่อง AED มาทันที"'
      },
      {
        id: 3,
        title: 'กดหน้าอกลึก 5-6 ซม. อัตราเร็ว 100-120 ครั้ง/นาที',
        desc: 'วางส้นมือตรงกึ่งกลางหน้าอก แขนเหยียดตรง ใช้เครื่อง AED ทันทีที่มาถึงและทำตามคำสั่งเสียง'
      }
    ],
    dontsTh: [
      'ห้ามหยุดกดหน้าอกนานเกิน 10 วินาที: การไหลเวียนของเลือดไปยังสมองและหัวใจจะลดลงทันที',
      'ห้ามสัมผัสตัวผู้ป่วยขณะเครื่อง AED กำลังวิเคราะห์จังหวะหัวใจหรือกำลังช็อกไฟฟ้า'
    ]
  },
  {
    id: 'fracture',
    nameTh: 'กระดูกหัก / ข้อเคลื่อน',
    nameEn: 'Fractures & Splinting',
    icon: '🦴',
    tagTh: 'การบาดเจ็บรุนแรง',
    goldenHour: 'ตรึงอวัยวะและลดความเจ็บปวด',
    severity: 'high',
    heroImage: '/assets/aistudio/Image_14_57467ec4.jpeg',
    heroImageCaption: 'การใช้วัสดุดามข้อต่อชั่วคราวเพื่อป้องกันการบาดเจ็บซ้ำซ้อนของเส้นประสาทและหลอดเลือด',
    translations: {
      EN: {
        title: 'INSTRUCTION FOR FRACTURE / INJURY',
        criticalInstruction: 'DO NOT MOVE THE INJURED LIMB. WE ARE APPLYING A SPLINT. STAY STILL, AN AMBULANCE IS ON THE WAY.',
        phoneticThai: '"ดู น็อท มูฟ ดิ อินเจิร์ด ลิมบ์. วี อาร์ แอพพลายอิ้ง อะ สปลินท์. สเตย์ สติล, แอน แอมบิวแลนซ์ อิส ออน เดอะ เวย์"',
        meaningThai: 'ห้ามขยับส่วนที่เจ็บ เรากำลังดามเพื่อป้องกันไม่ให้เคลื่อนไหว อยู่นิ่งๆ รถพยาบาลกำลังมา',
        warningNote: 'Moving broken bones can sever nerves and major blood vessels.'
      },
      中文: {
        title: '骨折及关节脱位紧急指示',
        criticalInstruction: '请绝对不要移动受伤肢体！我们正在为您固定夹板。请保持不动，救护车已经在路上。',
        phoneticThai: '"ฉิ่ง เจวี๋ย ต้วย ปู้ เหยา ยี ต้ง โซ่ว ซาง จือ ถี่! หว่อ เหมิน เจิ้ง ไจ้ เว่ย หนี่ กู้ ติ้ง เจี๋ย ป่าน. จิ้ว ฮู่ เชอ ไจ้ ลู่ ซ่าง!"',
        meaningThai: 'ห้ามขยับแขนขาที่เจ็บ กำลังดามกระดูก อยู่นิ่งๆ รถพยาบาลกำลังมา',
        warningNote: '移动骨折部位可能刺破周围血管与神经。'
      },
      RU: {
        title: 'ИНСТРУКЦИЯ ПРИ ПЕРЕЛОМЕ КОСТЕЙ',
        criticalInstruction: 'НЕ ДВИГАЙТЕ ПОВРЕЖДЕННОЙ КОНЕЧНОСТЬЮ! МЫ НАКЛАДЫВАЕМ ШИНУ. СКОРАЯ ПОМОЩЬ УЖЕ ЕДЕТ К НАМ.',
        phoneticThai: '"นี ดวีกายเตีย พาฟเรจเดียนนอย คาเนชนอสต์ยู! มึ นาคลัดดาวาเยม ชีนู. สโครายา ปอมอชช์ อุเจ เยเดียท!"',
        meaningThai: 'ห้ามขยับแขนขาที่บาดเจ็บ กำลังใส่เฝือกดาม รถพยาบาลกำลังมา',
        warningNote: 'Смещение костей может повредить сосуды и нервные стволы.'
      },
      DE: {
        title: 'ANWEISUNG BEI KNOCHENBRUCH',
        criticalInstruction: 'DAS VERLETZTE GLIED BITTE NICHT BEWEGEN! WIR LEGEN EINE SCHIENE AN. DER RETTUNGSWAGEN IST UNTERWEGS.',
        phoneticThai: '"ดาส แฟร์เล็ทซ์เทอ กลีด บิทเทอ นิคท์ เบเวเกน! เวียร์ เลเกน ไอเนอ ชิเนอ อัน. แดร์ เร็ททุงส์วาเกน อิสท์ อุนแตร์เวกส์"',
        meaningThai: 'ห้ามขยับส่วนที่เจ็บ กำลังดาม รถพยาบาลกำลังมา',
        warningNote: 'Bewegung kann Nerven und Gefäße irreversibel schädigen.'
      },
      JA: {
        title: '骨折・関節損傷 緊急指示',
        criticalInstruction: '患部を絶対に動かさないでください！副木（スプリント）で固定します。救急車が向かっています。',
        phoneticThai: '"คัมบุ โอะ เซ็ตไต นิ อูโงคาซะไนเดะ คุดาไซ! ฟุกุโบกุ เดะ โคเทอิ ชิมัส. คิวคิวชะ กะ มุคัทเตะ อิมัส"',
        meaningThai: 'ห้ามขยับอวัยวะที่หัก กำลังเข้าเฝือกดาม รถพยาบาลกำลังมา',
        warningNote: '患部を動かすと骨片が血管や神経を傷つけます。'
      }
    },
    stepsTh: [
      {
        id: 1,
        title: 'ประเมินจุดบาดเจ็บ ห้ามดัดกระดูกให้เข้าที่เอง',
        desc: 'ดูลักษณะความผิดรูป บวม ช้ำ หากมีบาดแผลเปิดให้ใช้ผ้าสะอาดปิดแผลก่อน'
      },
      {
        id: 2,
        title: 'ดามข้อต่อเหนือและใต้จุดที่หัก',
        desc: 'ใช้วัสดุที่แข็งแรงพอ เช่น แผ่นไม้ ไม้ไผ่ หรือกระดาษลูกฟูกพับหนา พันด้วยผ้ายืดให้แน่นพอดี'
      },
      {
        id: 3,
        title: 'ตรวจการไหลเวียนโลหิตปลายมือ/เท้า และโทร 1669',
        desc: 'คลำชีพจรส่วนปลายและสังเกตว่าปลายเล็บเปลี่ยนเป็นสีคล้ำหรือชาหรือไม่'
      }
    ],
    dontsTh: [
      'ห้ามพยายามดึงหรือดัดกระดูกที่ผิดรูปให้เข้าที่ด้วยตนเองเด็ดขาด: เสี่ยงทำให้กระดูกแทงทะลุผิวหนังหรือฉีกขาดหลอดเลือดใหญ่',
      'ห้ามให้ผู้ป่วยรับประทานอาหารหรือน้ำดื่ม: หากจำเป็นต้องได้รับการผ่าตัดด่วนที่โรงพยาบาล'
    ]
  },
  {
    id: 'heatstroke',
    nameTh: 'โรคลมแดด / ฮีทสโตรก',
    nameEn: 'Severe Heatstroke',
    icon: '☀️',
    tagTh: 'ภาวะอุณหภูมิกายวิกฤต',
    goldenHour: 'ลดอุณหภูมิกายภายใน 30 นาที',
    severity: 'high',
    heroImage: '/assets/aistudio/Image_9_e5d95098.jpeg',
    heroImageCaption: 'การปฐมพยาบาลนักท่องเที่ยวที่มีภาวะอุณหภูมิร่างกายสูงเกินในสภาพอากาศร้อนจัด',
    translations: {
      EN: {
        title: 'EMERGENCY HEATSTROKE INSTRUCTION',
        criticalInstruction: 'MOVE TO SHADE IMMEDIATELY. WE ARE COOLING YOU DOWN WITH WET TOWELS AND AIRFLOW. DO NOT DRINK RAPIDLY.',
        phoneticThai: '"มูฟ ทู เชด อิมมีเดียทลี. วี อาร์ คูลลิ่ง ยู ดาวน์ วิท เว็ท ทาวเอลส์ แอนด์ แอร์โฟลว์. ดู น็อท ดริ้งค์ แรพิดลี"',
        meaningThai: 'รีบย้ายเข้าที่ร่ม กำลังใช้ผ้าชุบน้ำเช็ดตัวระบายความร้อน อย่าดื่มน้ำเร็วเกินไป',
        warningNote: 'Body temperature above 40°C triggers multi-organ failure and brain edema.'
      },
      中文: {
        title: '严重中暑紧急指示 (HEATSTROKE)',
        criticalInstruction: '请立即移至阴凉通风处！我们正用湿毛巾帮您降温并扇风。意识不清时切勿大量饮水！',
        phoneticThai: '"ฉิ่ง ลี่ จี๋ อี๋ จื้อ อิน เหลียง ทง เฟิง ชู่! หว่อ เหมิน เจิ้ง ย่ง ซือ เหมา จิน ปัง หนี่ เจี้ยง เวิน!"',
        meaningThai: 'ย้ายเข้าที่ร่ม กำลังเช็ดตัวระบายความร้อน ห้ามดื่มน้ำหากเริ่มหมดสติ',
        warningNote: '体温超过40度会导致多器官衰竭与脑水肿。'
      },
      RU: {
        title: 'ИНСТРУКЦИЯ ПРИ ТЕПЛОВОМ УДАРЕ',
        criticalInstruction: 'СРОЧНО ПЕРЕЙДИТЕ В ТЕНЬ! МЫ ОХЛАЖДАЕМ ВАС ВЛАЖНЫМИ ПОЛОТЕНЦАМИ И ВЕТРОМ. НЕ ПЕЙТЕ ЗАЛПОМ.',
        phoneticThai: '"สโรชนอ พีริเยียดีเตีย ว เทน! มึ อัคคลาจดาเยม วาส วลาจนือมี ปาลาเทียทซามี. นี เปย์เตีย ซาลปัม"',
        meaningThai: 'ย้ายเข้าที่ร่ม ใช้ผ้าชุบน้ำเช็ดตัวระบายความร้อน อย่าดื่มน้ำอึกใหญ่',
        warningNote: 'Температура тела выше 40°C ведет к отеку мозга.'
      },
      DE: {
        title: 'NOTFALLANWEISUNG HITZSCHLAG',
        criticalInstruction: 'SOFORT IN DEN SCHATTEN GEHEN! WIR KÜHLEN SIE MIT FEUCHTEN TÜCHERN UND LUFTZUFUHR. NICHT HASTIG TRINKEN.',
        phoneticThai: '"โซฟอร์ท อิน เดน ชัทเทน เกเฮน! เวียร์ คืห์เลน ซี มิท ฟอยช์เทน ทือแชร์น อุนด์ ลุฟท์ซูฟูร์. นิคท์ ฮัสทิช ทริงเคิน"',
        meaningThai: 'ไปที่ร่มทันที ระบายความร้อนด้วยผ้าชุบน้ำ อย่าดื่มน้ำเร็วเกินไป',
        warningNote: 'Über 40°C drohen Kreislaufkollaps und Hirnödem.'
      },
      JA: {
        title: '重症熱中症 緊急指示',
        criticalInstruction: '直ちに日陰へ移動してください！濡れタオルと送風で体を冷却します。意識障害時は水を飲まないでください。',
        phoneticThai: '"ทาดาชินิ ฮิคาเงะ เอะ อิโด ชิเตะ คุดาไซ! นูเระทาโอรุ โตะ โซฟู เดะ คาราดะ โอะ เรย์เคียคุ ชิมัส"',
        meaningThai: 'ย้ายไปที่ร่ม ระบายความร้อนด้วยผ้าชุบน้ำ ห้ามดื่มน้ำหากเริ่มสะลึมสะลือ',
        warningNote: '体温40度超えは多臓器不全の危険があります。'
      }
    },
    stepsTh: [
      {
        id: 1,
        title: 'ย้ายเข้าที่ร่มและระบายอากาศ',
        desc: 'ปลดเสื้อผ้าให้หลวม ยกขาสูงเล็กน้อยเพื่อให้เลือดไหลเวียนกลับสู่สมอง'
      },
      {
        id: 2,
        title: 'เช็ดตัวด้วยน้ำธรรมดาและประคบจุดชีพจร',
        desc: 'วางผ้าเย็นหรือถุงน้ำแข็งบริเวณซอกคอ รักแร้ ขาหนีบ และพัดลมระบายความร้อน'
      },
      {
        id: 3,
        title: 'โทร 1669 หากซึม สับสน ชัก หรือหมดสติ',
        desc: 'หากผู้ป่วยหมดสติ ห้ามกรอกน้ำเข้าปากเด็ดขาดเพราะจะสำลักลงปอด'
      }
    ],
    dontsTh: [
      'ห้ามกรอกน้ำหรือยาเข้าปากผู้ป่วยที่หมดสติหรือสะลึมสะลือ: เสี่ยงต่อการสำลักอุดกั้นทางเดินหายใจ'
    ]
  }
];

export const EMERGENCY_HOTLINES: EmergencyHotline[] = [
  {
    number: '1669',
    nameTh: 'สถาบันการแพทย์ฉุกเฉินแห่งชาติ (สพฉ.)',
    nameEn: 'National Emergency Medical Services (EMS)',
    descriptionTh: 'เรียกรถพยาบาลกู้ชีพฉุกเฉิน ฟรี 24 ชั่วโมง ทั่วประเทศไทย มีพิกัดระบบดิจิทัล',
    badge: 'สายด่วนกู้ชีพ',
    isPrimary: true,
    category: 'medical',
    icon: 'Ambulance'
  },
  {
    number: '1155',
    nameTh: 'ตำรวจท่องเที่ยว (Tourist Police)',
    nameEn: 'Tourist Police Call Center',
    descriptionTh: 'เจ้าหน้าที่สื่อสารภาษาต่างประเทศ (Staff speak foreign languages) ประสานงานเหตุด่วนตลอด 24 ชม.',
    badge: 'มีล่ามแปลภาษา',
    isPrimary: true,
    category: 'police',
    icon: 'ShieldCheck'
  },
  {
    number: '191',
    nameTh: 'ศูนย์วิทยุตำรวจแห่งชาติ (เหตุด่วนเหตุร้าย)',
    nameEn: 'Police Emergency Patrol',
    descriptionTh: 'แจ้งเหตุด่วน เหตุอาชญากรรม อุบัติเหตุรุนแรง ทั่วราชอาณาจักรไทย',
    badge: 'เหตุด่วนเหตุร้าย',
    category: 'police',
    icon: 'ShieldAlert'
  },
  {
    number: '1367',
    nameTh: 'ศูนย์พิษวิทยารามาธิบดี (Ramathibodi Poison Center)',
    nameEn: 'Ramathibodi National Poison Center',
    descriptionTh: 'ปรึกษาแพทย์เชี่ยวชาญเรื่องพิษสัตว์ พิษงู พิษแมงกะพรุน และการเบิกจ่ายเซรุ่มแก้พิษ',
    badge: 'ปรึกษาเซรุ่ม/สารพิษ',
    category: 'poison',
    icon: 'HeartPulse'
  },
  {
    number: '1196',
    nameTh: 'ตำรวจน้ำและกู้ภัยทางทะเล (Marine Police)',
    nameEn: 'Marine Police & Sea Rescue',
    descriptionTh: 'อุบัติเหตุทางทะเล เรือล่ม นักท่องเที่ยวจมน้ำ ตามแนวชายฝั่งและเกาะท่องเที่ยว',
    badge: 'กู้ภัยทางทะเล',
    category: 'marine',
    icon: 'LifeBuoy'
  },
  {
    number: '1193',
    nameTh: 'ตำรวจทางหลวง (Highway Police)',
    nameEn: 'Highway Patrol',
    descriptionTh: 'อุบัติเหตุบนทางหลวงระหว่างจังหวัด รถเสีย ขอความช่วยเหลือฉุกเฉิน',
    badge: 'บนถนนทางหลวง',
    category: 'police',
    icon: 'Car'
  }
];

export const PHRASEBOOK: PhraseItem[] = [
  {
    id: 'pain-location',
    category: 'symptoms',
    categoryTh: 'สอบถามอาการบาดเจ็บ',
    thText: 'คุณเจ็บหรือปวดตรงไหนมากที่สุด?',
    translations: {
      EN: { text: 'Where does it hurt the most? Please point to it.', phonetic: 'แวร์ ดาส อิท เฮิร์ต เดอะ โมสต์? พลีส พอยท์ ทู อิท' },
      中文: { text: '你哪里最痛？请指给我看。', phonetic: 'หนี่ หนา หลี่ จุ้ย ท่ง? ฉิ่ง จื่อ เก่ย หว่อ คั่น' },
      RU: { text: 'Где болит сильнее всего? Покажите пальцем.', phonetic: 'กดเย บาลิต ซิลเนียเย วเซโว? ปาคาจีเตีย ปัลเซม' },
      DE: { text: 'Wo tut es am meisten weh? Zeigen Sie bitte darauf.', phonetic: 'โว ทูท เอส อัม ไมสเตน เวห์? ไซเกิน ซี บิทเทอ ดารอฟ' },
      JA: { text: 'どこが一番痛いですか？指でさしてください。', phonetic: 'โดโคะ กะ อิจิบัง อิตะอิ เดสกะ? ยูบิ เดะ ซาชิเตะ คุดาไซ' }
    }
  },
  {
    id: 'breathe-check',
    category: 'symptoms',
    categoryTh: 'สอบถามอาการบาดเจ็บ',
    thText: 'คุณหายใจสะดวกไหม? แน่นหน้าอกหรือเปล่า?',
    translations: {
      EN: { text: 'Can you breathe easily? Do you feel chest tightness?', phonetic: 'แคน ยู บรีธ อีซีลี? ดู ยู ฟีล เชสต์ ไทท์เนส?' },
      中文: { text: '你呼吸顺畅吗？胸口闷吗？', phonetic: 'หนี่ หู ซี ซุ่น ช่าง มะ? ซวง โข่ว เมิ่น มะ?' },
      RU: { text: 'Вам легко дышать? Давит ли в груди?', phonetic: 'วัม เลกโก ดึยชาท? ดาวิต ลี ว กรูดี?' },
      DE: { text: 'Können Sie normal atmen? Haben Sie Engegefühl in der Brust?', phonetic: 'เคินเนน ซี นอร์มาล อาตเมน? ฮาเบน ซี เอ็งเงอเกอฟืห์ล อิน แดร์ บรุสท์?' },
      JA: { text: '息苦しさや胸の圧迫感はありますか？', phonetic: 'อิกิกุรุชิซะ ยะ มุเนะ โนะ อัปปะคุกัง วะ อะริมัสกะ?' }
    }
  },
  {
    id: 'allergies',
    category: 'medical_history',
    categoryTh: 'ประวัติแพ้ยาและโรคประจำตัว',
    thText: 'คุณมีประวัติแพ้ยา หรือมีโรคประจำตัวอะไรไหม?',
    translations: {
      EN: { text: 'Do you have any drug allergies or medical conditions?', phonetic: 'ดู ยู แฮฟ เอนี่ ดรัก แอลเลอร์จีส์ ออร์ เมดิคัล คอนดิชั่นส์?' },
      中文: { text: '你有药物过敏史或慢性病吗？', phonetic: 'หนี่ โหย่ว เย้า อู้ กั้ว หมิ่น สื่อ ฮั่ว ม่าน ซิ่ง ปิ้ง มะ?' },
      RU: { text: 'У вас есть аллергия на лекарства или хронические болезни?', phonetic: 'อู วาส เยสต์ อัลเลอร์กียา นา เลการ์สตวา อิลี ฮรานีเชสคิเย บาเลซนี?' },
      DE: { text: 'Haben Sie Medikamentenallergien oder Vorerkrankungen?', phonetic: 'ฮาเบน ซี เมดิกาเมนเทนอัลแลร์กีน โอเดอร์ ฟอร์แอร์ครังคุงเกิน?' },
      JA: { text: 'アレルギーや持病はありますか？', phonetic: 'อะเร็รูกี ยะ จิบโย วะ อะริมัสกะ?' }
    }
  },
  {
    id: 'stay-calm',
    category: 'reassurance',
    categoryTh: 'ปลอบขวัญและสั่งการ',
    thText: 'ใจเย็นๆ นะครับ/ค่ะ รถพยาบาล 1669 กำลังเดินทางมาช่วย',
    translations: {
      EN: { text: 'Please stay calm. The 1669 ambulance is on the way right now.', phonetic: 'พลีส สเตย์ คาล์ม. ดิ วัน-ซิกซ์-ซิกซ์-ไนน์ แอมบิวแลนซ์ อิส ออน เดอะ เวย์ ไรท์ นาว' },
      中文: { text: '请保持镇定，1669急救车已经在全速赶来。', phonetic: 'ฉิ่ง เป่า ฉือ เจิ้น ติ้ง, อี-ลิ่ว-ลิ่ว-จิ่ว จี๋ จิ้ว เชอ ไจ้ เฉวียน ซู่ กั่น ไหล' },
      RU: { text: 'Пожалуйста, успокойтесь. Скорая помощь 1669 уже в пути.', phonetic: 'ปาจาลุยสตา, อุสปาโคยเตียส. สโครายา ปอมอชช์ วัน-ซิกซ์-ซิกซ์-ไนน์ อุเจ ว ปูตี' },
      DE: { text: 'Bitte bleiben Sie ruhig. Der Krankenwagen 1669 ist bereits unterwegs.', phonetic: 'บิทเทอ ไบลเบน ซี รูฮิช. แดร์ ครังเคนวาเกน วัน-ซิกซ์-ซิกซ์-ไนน์ อิสท์ เบไรทส์ อุนแตร์เวกส์' },
      JA: { text: '落ち着いてください。1669救急車が今向かっています。', phonetic: 'โอจิทสึอิเตะ คุดาไซ. 1669 คิวคิวชะ กะ อิมะ มุคัทเตะ อิมัส' }
    }
  },
  {
    id: 'do-not-move',
    category: 'instructions',
    categoryTh: 'คำสั่งฉุกเฉิน',
    thText: 'อยู่นิ่งๆ ห้ามลุกขึ้นเดินเด็ดขาด',
    translations: {
      EN: { text: 'Stay completely still. Do not try to stand up or walk!', phonetic: 'สเตย์ คอมพลีทลี สติล. ดู น็อท ทราย ทู สแตนด์ อัพ ออร์ วอล์ค!' },
      中文: { text: '请完全保持不动！绝对不要试图站立或走动！', phonetic: 'ฉิ่ง หวัน เฉวียน เป่า ฉือ ปู้ ต้ง! เจวี๋ย ปู้ เหยา ซื่อ ถู จั้น ลี่ ฮั่ว โจ่ว ต้ง!' },
      RU: { text: 'Лежите неподвижно. Ни в коем случае не вставайте!', phonetic: 'เลจีเตีย นีปาดวิจนอ. นี ว โคม สลูชาเย นี ฟสตาวายเตีย!' },
      DE: { text: 'Ganz still liegen bleiben. Versuchen Sie keinesfalls aufzustehen!', phonetic: 'กานซ์ ชติล ลีเกน ไบลเบน. แฟร์ซูเคน ซี ไคน์เนสฟาลส์ เอาฟซูชเตเฮน!' },
      JA: { text: 'じっとしていてください。決して立ち上がったり歩かないでください！', phonetic: 'จิตโตะ ชิเตะ อิเตะ คุดาไซ. เคชชิเตะ ทะจิอะกัตตะริ อะรุคะไนเดะ คุดาไซ!' }
    }
  }
];
