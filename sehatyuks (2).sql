-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2022 at 04:42 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sehatyuks`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer_table`
--

CREATE TABLE `answer_table` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `article_table`
--

CREATE TABLE `article_table` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `image` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `article_table`
--

INSERT INTO `article_table` (`id`, `title`, `image`, `description`) VALUES
(6, 'Menjaga Kesehatan saat pandemic', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f2VJqXVr8sbctoFUhy7AeM0MUtkvjxPq4A&usqp=CAU', 'Meningkatnya kasus aktif Covid-19 yang diperparah dengan peralihan musim yang saat ini terjadi, menjadi pengingat bagi kita untuk terus menjaga kesehatan baik secara fisik maupun mental. Perubahan cuaca yang tak menentu juga menyebabkan tubuh seseorang menjadi terus menerus harus beradaptasi, sehingga tidak heran ketika seseorang memiliki sistem imun yang tidak cukup kuat, akan mudah terserang penyakit.\r\n\r\nMenurut Kotler, pola hidup sehat adalah gambaran dari aktivitas berdasarkan keinginan dan minat kita dan bagaimana pikiran kita menjalaninya dalam berinteraksi dengan lingkungan kita. Pola hidup sehat yang kita terapkan dapat secara positif kita tularkan kepada orang lain, khususnya kepada keluarga sehingga mereka juga dapat merasakan banyak manfaatnya.\r\n\r\nMelihat urgensi demikian, maka jalan keluar yang harus ditempuh adalah dengan memulai pola hidup sehat setiap harinya. Pola hidup sehat bisa dimulai dari merubah hal-hal kecil dalam kehidupan kita yang kurang sehat, sehingga nantinya diharapkan dapat menerapkan pola hidup sehat secara total dan kondisi tubuh akan lebih sehat dan bugar.\r\n\r\nBerikut ini adalah beberapa hal kecil yang dapat mulai kita perbaiki untuk bisa menerapkan pola hidup sehat.\r\n\r\n•	Cukupi kebutuhan nutrisi harian tubuh dengan dengan mengkonsumsi makanan dengan cukup serat.\r\n\r\n•	Memperbaiki pola waktu tidur menjadi 7-9 jam per malam.\r\n\r\n•	Mulai berfikir positif, sehingga kesehatan mental akan menjadi lebih baik.\r\n\r\n•	Rutin dalam melakukan olahraga, dimulai dengan olahraga ringan.\r\n\r\nDemikian beberapa hal sederhana yang bisa mulai kita lakukan untuk memperbaiki pola hidup kita, terutama pada masa pandemi Covid-19 dan pancaroba seperti saat ini. Mari, tetap terapkan protokol kesehatan, baik ketika beraktivitas di dalam maupun di luar ruangan. Masyarakat juga diimbau untuk segera divaksinasi jika belum, agar herd immunity  dapat segera terbentuk, sehingga kematian serta hospitalisasi akibat Covid-19 dapat lebih diminimalisir.\r\n'),
(7, 'Cara menjaga Kesehatan mata', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMYU1KdumR-I11g96qaLuYA_Jaxp6iczo9g&usqp=CAU', 'Anggota tubuh yang kita miliki merupakan aset yang sangat berharga untuk kita dalam menjalankan kehidupan. Sehingga dengan demikian, menjaga kesehatan tubuh menjadi sebuah kewajiban yang harus dilakukan untuk menghindarkan dari berbagai penyakit yang dapat membahayakan dan mengganggu kesehatan anggota tubuh tersebut saat digunakan\r\nSalah satu anggota tubuh yang penting tersebut adalah mata. Mata yang sehat adalah mata yang  terbebas dari berbagai penyakit seperti mata kering, katarak, gangguan retina dan berbagai penyakit lainnya yang dapat mengganggu penglihatan seseorang.\r\nTips Menjaga Kesehatan\r\nMengetahui hal tersebut, maka tips menjaga kesehatan mata merupakan hal yang penting untuk diketahui, diantaranya adalah sebagai berikut:\r\n1. Hindari paparan langsung sinar matahari atau kemasukan benda asing dengan menggunakan pelindung atau kacamata saat berada di luar ruangan maupun saat berkendara\r\n2. Setelah 20 menit menatap layar gawai atau gadget secara langsung, palingkan mata selama 20 detik dengan melihat objek sejauh 20 meter\r\n3. Menjaga kebersihan mata serta tidak menggosok mata.\r\nDengan menerapkan berbagai cara menjaga kesehatan mata pada poin yang telah disebutkan diatas, diharapkan mampu meminimalisir kerusakan mata atau kaburnya penglihatan di tengah masyarakat.\r\nTetap terapkan perilaku hidup bersih dan sehat, serta melakukan pemeriksaan ke dokter mata apabila mengalami gangguan penglihatan, agar bisa segera mendapatkan penanganan secara cepat agar tidak menjadi masalah penglihatan yang jauh lebih buruk.\r\n'),
(8, 'Tips menjaga Kesehatan saat dipengungsian', 'https://pusatkrisis.kemkes.go.id/__asset/__images/content/59WhatsApp%20Image%202022-11-30%20at%2016.09.19.jpeg', 'Gempa dengan kekuatan magnitudo 5,6 di darat dan kedalaman mencapai 10 Km yang berpusat di kabupaten Cianjur pada 21 November 2022 yang lalu, telah menyebabkan 169.124 orang penduduk terdampak. Hasilnya, kini sebanyak 58.362 orang harus di evakuasi menuju tempat yang lebih aman.\r\nSaat ini diketahui bahwa para masyarakat yang harus mengungsi tersebut, tersebar di 9 titik tempat yang berbeda. Selama berada di lokasi pengungsian, masyarakat diharapkan untuk tetap bisa disiplin dalam menjaga kesehatan, hal ini dilakukan untuk tetap menjaga kesehatan fisik maupun mental, terutama di tengah pandemi seperti saat ini.\r\nTips Sehat Selama di Lokasi Pengungsian.\r\nBerikut ini adalah beberapa hal yang bisa dilakukan oleh masyarakat yang telah berhasil dievakuasi untuk menjaga kondisi kesehatannya, diantaranya adalah:\r\n•	Biasakan cuci tangan pakai sabun dengan air mengalir\r\n•	Menggunakan masker\r\n•	Lindungi tempat air bersih & makanan dari kotoran, debu dan lalat\r\n•	Tidak merokok di pengungsian\r\n•	Gunakan selimut & alas tidur di malam hari\r\n•	Lakukan buang air besar & kecil di jamban\r\n•	Kendalikan stress dengan melakukan kegiatan bersama\r\nDengan menjalankan berbagai aktivitas diatas, diharapkan kesehatan fisik maupun mental masyarakat selama berada di lokasi pengungsian dapat lebih terjaga.\r\nTetap disiplin perilaku hidup bersih dan sehat serta segera  melakukan pemeriksaan ke fasilitas pelayanan kesehatan yang tidak terdampak apabila mengalami gejala penyakit atau luka selama berada di lokasi pengungsian.\r\nTetap dengarkan informasi dari instansi resmi untuk menghindari kesalahan informasi serta  tidak bermain atau memasuki bangunan yang terdampak gempa, untuk menghindari potensi luka saat bangunan roboh.\r\n'),
(9, 'Mengetahui Bahaya Rokok Elektrik', 'https://fkm.unair.ac.id/wp-content/uploads/2022/04/vape.jpg', 'Sejak kemunculan rokok elektrik di tengah masyarakat Indonesia, peredaran dan penggunaan rokok elektrik semakin menjamur di tengah masyarakat. Terlepas dari harga yang lebih terjangkau, rokok elektronik ternyata sama berbahayanya dengan rokok konvensional yang sudah lebih dulu beredar di tengah masyarakat.\r\nPada dasarnya, kedua jenis rokok tersebut sama-sama mengandung karsinogen atau bahan-bahan yang menginduksi kanker melalui kegiatan merokok yang melalui saluran pernapasan dan paru.\r\nSehingga dengan melihat kenyataan tersebut, berhenti dari kegiatan yang tidak sehat seperti merokok menggunakan rokok elektronik maupun konvensional, sudah seharusnya dilakukan oleh masyarakat untuk bisa meningkatkan kesehatan dalam tubuh.\r\nBahaya Rokok Elektrik Bagi Tubuh.\r\nBerikut ini adalah beberapa bahaya dari rokok elektrik yang perlu diketahui oleh masyarakat, diantaranya adalah:\r\n1.	Kandungan nikotin dalam rokok akan menimbulkan efek candu dan memicu depresi, napas pendek, kanker paru, kerusakan paru permanen, hingga kematian\r\n2.	Kandungan Glikol pada rokok elektrik akan mengiritasi paru-paru dan mata, serta menimbulkan gangguan saluran pernafasan seperti asma, sesak nafas, hingga obstruksi jalan napas.\r\n3.	Diasetil atau penambah rasa pada rokok elektrik akan menyebabkan penyakit paru obstruktif kronis\r\n4.	Memicu terjadinya kanker\r\nInformasi bahaya penggunaan rokok elektrik diharapkan dapat memberikan kesadaran bagi masyarakat yang ingin berpindah dari rokok konvensional ke rokok elektrik karena Misinformation yang mengatakan bahwa rokok elektrik lebih sehat.\r\nTetap terapkan perilaku hidup sehat dengan berhenti dari kegiatan merokok, dan segera hubungi Layanan Konsultasi Berhenti Merokok QUITLINE.INA di 0-800-177-6565 (free call service) apabila membutuhkan bantuan dalam berhenti merokok.\r\nTidak lupa untuk segera menghubungi fasilitas kesehatan apabila mengalami penyakit akibat rokok, agar bisa segera mendapatkan penanganan sedini mungkin.\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `covid_table`
--

CREATE TABLE `covid_table` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `image` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `covid_table`
--

INSERT INTO `covid_table` (`id`, `title`, `image`, `description`) VALUES
(1, 'Virus COVID-19 Varian Alpha', 'https://akcdn.detik.net.id/visual/2020/04/14/dcda396d-2b91-4527-abb2-c8a40ab8a409_169.jpeg?w=650', 'Virus alpha  adalah varian yang awalnya terdeteksi di Inggris. Alpha memiliki nama lain, seperti varian Kent atau virus B117. Disebutkan jika virus ini setidaknya lebih mudah menular daripada jenis yang pertama kali terdeteksi di China.\r\nSelain itu, data juga menunjukkan jika virus COVID-19 ini sekitar 30–70 persen lebih mematikan dibandingkan yang lainnya. Laporan kasus sejauh ini menunjukkan bahwa pasien COVID-19 yang terinfeksi virus Corona varian Alfa bisa mengalami gejala yang lebih parah. Namun, pada orang yang telah menerima vaksin COVID-19, gejala infeksi virus Corona varian ini umumnya lebih ringan. Suatu penelitian menunjukkan jika vaksin AstraZeneca memiliki tingkat efektivitas sebesar 70,4 persen melawan gejala COVID-19 dari varian baru ini. Untuk Pfizer, angkanya mencapai 89,5 persen yang terjadi paling tidak 14 hari setelah penerimaan dosis kedua.'),
(2, 'Virus COVID-19 Varian Beta', 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/16063418/kenali-varian-alpha-beta-dan-delta-dari-virus-covid-19-halodoc-1.jpg.webp', 'Varian ini ditemukan di India yang pertama kali terdeteksi pada bulan Oktober , sehingga menyebabkan gelombang kedua yang awalnya telah surut. Jenis virus COVID-19 ini lebih menular dan mampu menghindari respons imun tubuh akibat mutasi yang terjadi. Bahkan, varian ini diperkirakan 40 persen lebih menular dibandingkan jenis Alpha.\r\nDisebut-sebut juga jika vaksin kurang efektif untuk melawan varian delta ini. Bahkan, penilaian risiko terbaru menyebut jika ada tingkat ketidakpastian yang tinggi tentang efektivitas AstraZeneca terhadap varian ini meski telah mendapatkan dua dosis. Seseorang yang terinfeksi virus COVID-19 jenis delta lebih berisiko mendapatkan perawatan di rumah sakit dibandingkan jenis Alpha. Maka dari itu, varian ini disebut-sebut yang paling buruk dari semua jenis yang ada.'),
(3, 'Virus COVID-19 Varian Delta', 'https://akcdn.detik.net.id/visual/2021/09/30/infografis-kenali-varian-virus-covid-19-terkini-dari-delta-hingga-muaristya-rahadian_169.png?w=715&q=90', 'Varian ini menyebar lebih cepat dari varian COVID-19 lainnya, namun dengan gejala lebih ringan atau cenderung tidak bergejala. Varian ini sudah terdeteksi di beberapa negara sejak pertama kali ditemukan di Benua Afrika. Varian jenis ini pertama kali terdeteksi di Afrika Selatan. Varian ini disebut sebagai salah satu yang sangat cepat dalam menularkan virus. \r\nCovid-19 umumnya seperti demam, sakit kepala, batuk dan kehilangan penciuman. Saat ini varian baru Covid-19 jenis ini menjadi salah satu yang mendapat perhatian dunia. Sejumlah laporan mengatakan bahwa infeksi varian ini cenderung menyebabkan gejala kelelahan, dan nyeri tubuh. Secara umum, upaya pencegahan penyebaran Covid-19 terutama omicron, tidak cukup bila hanya dilakukan secara upaya tunggal seperti mendapatkan vaksinasi yang lengkap tanpa menjaga protokol kesehatan, maupun sebaliknya. Adanya proteksi ekstra meliputi kedua upaya tersebut bersamaam merupakan langkah yang harus dilakukan oleh seluruh masyarakat agar mampu melindungi diri dan orang di sekitar dari paparan Covid-19, serta meminimalisir dari hospitalisasi dan kematian akibat Covid-19.'),
(4, 'Virus COVID-19 Varian omicron', 'https://npr.brightspotcdn.com/dims4/default/371e539/2147483647/strip/true/crop/754x757+0+0/resize/880x884!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwmra%2Ffiles%2F202112%2Fomicron.png', 'Varian ini menyebar lebih cepat dari varian COVID-19 lainnya, namun dengan gejala lebih ringan atau cenderung tidak bergejala. Varian ini sudah terdeteksi di beberapa negara sejak pertama kali ditemukan di Benua Afrika. Varian jenis ini pertama kali terdeteksi di Afrika Selatan. Varian ini disebut sebagai salah satu yang sangat cepat dalam menularkan virus. \r\nVarian Omicron memiliki sejumlah besar mutasi, beberapa di antaranya mengkhawatirkan. Gejala varian virus corona Omicron tidak jauh berbeda dengan varian Covid-19 umumnya seperti demam, sakit kepala, batuk dan kehilangan penciuman. Saat ini varian baru Covid-19 jenis ini menjadi salah satu yang mendapat perhatian dunia. Sejumlah laporan mengatakan bahwa infeksi varian ini cenderung menyebabkan gejala kelelahan, dan nyeri tubuh. Secara umum, upaya pencegahan penyebaran Covid-19 terutama omicron, tidak cukup bila hanya dilakukan secara upaya tunggal seperti mendapatkan vaksinasi yang lengkap tanpa menjaga protokol kesehatan, maupun sebaliknya. Adanya proteksi ekstra meliputi kedua upaya tersebut bersamaam merupakan langkah yang harus dilakukan oleh seluruh masyarakat agar mampu melindungi diri dan orang di sekitar dari paparan Covid-19, serta meminimalisir dari hospitalisasi dan kematian akibat Covid-19.'),
(5, 'Manfaat vaksinasi Covid-19', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSt4BiE0vVYZVRR0F5KVO0rkDFKLyolZawQ&usqp=CAU', '• Meningkatkan Sistem Kekebalan Tubuh\r\nVaksin yang terdiri dari berbagai produk biologi dan bagian dari virus yang sudah dilemahkan yang disuntikkan ke dalam manusia, akan merangsang timbulnya imun atau daya tahan tubuh seseorang. \r\n\r\n• Mengurangi Risiko Penularan\r\nTubuh seseorang yang telah disuntikkan vaksin, akan merangsang antibodi untuk belajar dan mengenali virus yang telah dilemahkan tersebut. Dengan demikian, tubuh akan mengenai virus dan mengurang risiko terpapar.\r\n\r\n• Mengurangi Dampak Berat dari Virus\r\nDengan kondisi kekebalan tubuh yang telah mengenali virus, maka jika sistem imun seseorang kalah dan kemudian terpapar, maka dampak atau gejala dari virus tersebut akan mengalami pelemahan.\r\n\r\n• Mencapai Herd Immunity\r\nSemakin banyak individu yang melakukan vaksin di sebuah daerah atau negara, maka Herd Immunity akan tercapai, sehingga meminimalisir risiko paparan dan mutasi dari virus Covid-19\r\nDengan adanya informasi diatas, diharapkan masyarakat akan mendapatkan kesadaran bersama tentang penting nya melakukan vaksinasi di tengah pandemi yang melanda saat ini.\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `drug_table`
--

CREATE TABLE `drug_table` (
  `id` int(11) NOT NULL,
  `summary` text NOT NULL,
  `name_general` text NOT NULL,
  `image_drug` text NOT NULL,
  `indication` text NOT NULL,
  `brand_name` text NOT NULL,
  `background` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `drug_table`
--

INSERT INTO `drug_table` (`id`, `summary`, `name_general`, `image_drug`, `indication`, `brand_name`, `background`) VALUES
(14, 'Salbutamol is a beta-2 adrenergic receptor agonist used to treat asthma, bronchitis, COPD, as well as prevent exercise induced bronchospasms.', 'Salbutamol', 'https://c.pxhere.com/photos/c7/75/asthma_ventolin_breathe_inhaler_medication_health_illness_medical-660816.jpg!d', 'Salbutamol is indicated for (i) the symptomatic relief and prevention of bronchospasm due to bronchial asthma, chronic bronchitis, reversible obstructive airway disease, and other chronic bronchopulmonary disorders in which bronchospasm is a complicating factor, and/or (ii) the acute prophylaxis against exercise-induced bronchospasm and other stimuli known to induce bronchospasm.Label,3,4', 'Airomir, Combivent, Proair, Proventil, Ventolin, Xopenex', 'Salbutamol is a short-acting, selective beta2-adrenergic receptor agonist used in the treatment of asthma and COPD. It is 29 times more selective for beta2 receptors than beta1 receptors giving it higher specificity for pulmonary beta receptors versus beta1-adrenergic receptors located in the heart. Salbutamol is formulated as a racemic mixture of the R- and S-isomers. The R-isomer has 150 times greater affinity for the beta2-receptor than the S-isomer and the S-isomer has been associated with toxicity. '),
(15, 'Aspirin is a salicylate used to treat pain, fever, inflammation, migraines, and reducing the risk of major adverse cardiovascular events.', 'Asam asetilsalisilat', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Aspirin_%281%29.jpg/800px-Aspirin_%281%29.jpg?20200605063029', 'Pain, fever, and inflammation\r\n\r\nAcetylsalicylic acid (ASA), in the regular tablet form (immediate-release), is indicated to relieve pain, fever, and inflammation associated with many conditions, including the flu, the common cold, neck and back pain, dysmenorrhea, headache, tooth pain, sprains, fractures, myositis, neuralgia, synovitis, arthritis, bursitis, burns, and various injuries. It is also used for symptomatic pain relief after surgical and dental procedures Label.', 'Aggrenox, Alka-seltzer, Alka-seltzer Fruit Chews, Anacin, Arthriten Inflammatory Pain, Ascomp, Aspi-cor, Aspir-low, Bayer Aspirin, Bayer Womens, Bc Arthritis, Bc Original Formula, Bufferin, Duoplavin, Durlaza, Ecotrin, Ecpirin', 'Also known as Aspirin, acetylsalicylic acid (ASA) is a commonly used drug for the treatment of pain and fever due to various causes. Acetylsalicylic acid has both anti-inflammatory and antipyretic effects. This drug also inhibits platelet aggregation and is used in the prevention of blood clots stroke, and myocardial infarction (MI) Label.\r\n\r\nInterestingly, the results of various studies have demonstrated that long-term use of acetylsalicylic acid may decrease the risk of various cancers, including colorectal, esophageal, breast, lung, prostate, liver and skin cancer 15. Aspirin is classified as a non-selective cyclooxygenase (COX) inhibitor 11,14 and is available in many doses and forms, including chewable tablets, suppositories, extended release formulations, and others 19.'),
(16, 'Acetaminophen is an analgesic drug used alone or in combination with opioids for pain management, and as an antipyretic agent.', 'Acetaminophen', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Extra_Strength_Tylenol_and_Tylenol_PM.jpg/479px-Extra_Strength_Tylenol_and_Tylenol_PM.jpg?20080306151134', 'In general, acetaminophen is used for the treatment of mild to moderate pain and reduction of fever.23 It is available over the counter in various forms, the most common being oral forms.\r\n\r\nAcetaminophen injection is indicated for the management of mild to moderate pain, the management of moderate to severe pain with adjunctive opioid analgesics, and the reduction of fever.Label\r\n\r\nBecause of its low risk of causing allergic reactions, this drug can be administered in patients who are intolerant to salicylates and those with allergic tendencies, including bronchial asthmatics.23 Specific dosing guidelines should be followed when administering acetaminophen to children.18', 'Acephen, Acetadryl, Allzital, Apadaz, Arthriten Inflammatory Pain, Bupap, Butapap, Cetafen, Silapap Anak, Contac Cold and Flu Non Drowsy Maximum Strength, Coricidin Hbp Cold & Flu, Darvocet-N, Dayquil Sinex, Diphen, Dolofin, Dologen, Dologesic Diformulasi ulang Jun 2016, Duralgina, Dvorah', 'Acetaminophen (paracetamol), also commonly known as Tylenol, is the most commonly taken analgesic worldwide and is recommended as first-line therapy in pain conditions by the World Health Organization (WHO).10 It is also used for its antipyretic effects, helping to reduce fever.23 This drug was initially approved by the U.S. FDA in 1951 and is available in a variety of forms including syrup form, regular tablets, effervescent tablets, injection, suppository, and other forms.15,16,23,Label'),
(17, 'Diphenhydramine is a H1 receptor antihistamine used in the treatment of seasonal allergies, and various allergic reactions including sneezing, runny nose, itchy/watery eyes, itching of nose or throat, pruritus, urticaria, insect bites/stings, and allergic rashes.', 'Diphenhydramine', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Diphenhydramine_%281%29.JPG/450px-Diphenhydramine_%281%29.JPG?20100407081353', 'Diphenhydramine is a first-generation histamine H1 receptor antagonist (H1 antihistamine) that is widely available as a non-prescription, over-the-counter (OTC) medication. As an OTC medication, diphenhydramine is typically formulated as tablets and creams indicated for use in treating sneezing, runny nose, itchy/watery eyes, itching of nose or throat, insomnia, pruritis, urticaria, insect bites/stings, allergic rashes, and nausea 9,10,11,17,5.', 'Acetadryl, Advil PM, Aleve PM, Allegra Cooling Relief Anti-itch, Banophen, Benadryl, Benadryl Itch Stopping, Benadryl-D Allergy and Sinus, Calagel, Damylin With Codeine, Dimetapp Nighttime Cold & Congestion', 'Diphenhydramine - perhaps known most commonly as its brand name formulation Benadryl - is a first-generation H1 receptor antihistamine that is used extensively for the treatment of seasonal allergies, insect bites and stings, and rashes 9,10,11,17. However, it also has antiemetic, antitussive, hypnotic, and antiparkinson properties 11,16. As histamine receptors exist both peripherally and in the central nervous system, diphenhydramine has been shown to cause sedation due to its competitive antagonism of histamine H1 receptors within the central nervous system 9,10,11,17,5'),
(18, 'Epinephrine is a hormone and neurotransmitter used to treat allergic reactions, restore cardiac rhythm, and control mucosal congestion, glaucoma, and asthma.', 'Epinephrine', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Epinephrine-ampule.JPG/472px-Epinephrine-ampule.JPG?20190810064925', 'Epinephrine injection is indicated in the emergency treatment of type I allergic reactions, including anaphylaxis. It is also used to increase mean arterial blood pressure in adult patients with hypotension associated with septic shock.17\r\n\r\nEpinephrine\'s cardiac effects may be of use in restoring cardiac rhythm in cardiac arrest due to various causes but is not used in cardiac failure or in hemorrhagic, traumatic, or cardiogenic shock 18.', 'Adrenalin, Allerject, Anapen, Articadent, Astracaine, Auvi-Q, Citanest, Citanest Forte, Emerade, Epipen, Lignospan, Marcaine, Marcaine With Epinephrine, Octocaine, Octocaine With Epinephrine', 'Epinephrine, also known as adrenaline, is a hormone and neurotransmitter and produced by the adrenal glands that can also be used as a drug due to its various important functions. Though it has long been used in the treatment of hypersensitivity reactions, epinephrine in the auto-injector form (EpiPen) has been available since 1987 in the USA. Many new products/biosimilars and dosage routes have been approved under various names over the last several decades 10, 11, 12'),
(19, 'Tramadol is a centrally-acting opioid agonist and SNRI (serotonin/norepinephrine reuptake inhibitor) used for the management of moderate to severe pain in adults.', 'Tramadol', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/200mgTramadol.jpg/339px-200mgTramadol.jpg?20110803011709', 'Epinephrine injection is indicated in the emergency treatment of type I allergic reactions, including anaphylaxis. It is also used to increase mean arterial blood pressure in adult patients with hypotension associated with septic shock.17\r\n\r\nEpinephrine\'s cardiac effects may be of use in restoring cardiac rhythm in cardiac arrest due to various causes but is not used in cardiac failure or in hemorrhagic, traumatic, or cardiogenic shock 18.', 'Adrenalin, Allerject, Anapen, Articadent, Astracaine, Auvi-Q, Citanest, Citanest Forte, Emerade, Epipen, Lignospan, Marcaine, Marcaine With Epinephrine, Octocaine, Octocaine With Epinephrine, Orabloc, Scandonest, Sensorcaine', 'Epinephrine, also known as adrenaline, is a hormone and neurotransmitter and produced by the adrenal glands that can also be used as a drug due to its various important functions. Though it has long been used in the treatment of hypersensitivity reactions, epinephrine in the auto-injector form (EpiPen) has been available since 1987 in the USA. Many new products/biosimilars and dosage routes have been approved under various names over the last several decades 10, 11, 12');

-- --------------------------------------------------------

--
-- Table structure for table `lingkungan_table`
--

CREATE TABLE `lingkungan_table` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `image` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lingkungan_table`
--

INSERT INTO `lingkungan_table` (`id`, `title`, `image`, `description`) VALUES
(1, 'Pengelolaan air buangan dan pengendalian pencemaran', 'https://synergysolusi.com/wp-content/uploads/2016/08/pengelolaan-air-minum-dan-air-bersih-2-pc-1-900x450.jpg', 'Indonesia tengah melakukan pengendalian terhadap permasalahan serius berkaitan dengan pencemaran air, khususnya sungai. Sungai yang merupakan salah satu sumber air di Indonesia, terus menunjukan tren penurunan kualitas setiap tahunnya. \r\nDalam Undang-Undang Nomor 32 Tahun 2009 tentang Pengelolaan dan Perlindungan Lingkungan Hidup, pengawasan merupakan bagian dari mekanisme penegakan hukum. Tujuan utama pengawasan adalah memantau, mengevaluasi dan menetapkan status ketaatan penanggung jawab usaha dan/atau kegiatan terhadap peraturan perundang-undangan di bidang perlindungan dan pengelolaan lingkungan hidup (“PPLH”), perizinan lingkungan, serta kewajiban pengelolaan dan pemantauan lingkungan dalam dokumen lingkungan hidup. Dalam hubungannya dengan kualitas air, pengawasan memiliki nilai penting sebagai berikut:\r\nMemastikan pengendalian pencemar yang masuk ke sumber-sumber air dari pencemar tertentu (point sources) berjalan sesuai izin, dengan mematuhi ketentuan yang dipersyaratkan; dan Memverifikasi akurasi informasi swapantau, pengujian dan pemantauan yang diberikan kegiatan dan/atau usaha dalam laporannya.\r\nPengendalian pencemaran air sendiri hanya menjadi satu bagian dari keseluruhan kerangka  pengelolaan kualitas air, mencakup upaya pencegahan dan penanggulangan pencemaran air serta pemulihan kualitas air untuk menjamin kualitas air agar sesuai dengan baku mutu air.'),
(2, 'Pengelolaan Limbah Padat atau Solid Waste Management', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUH8rrfiOAXNIOyRaA3naU9CZOM7KAXRJ3Q&usqp=CAU', 'Limbah padat atau sampah yang dihasilkan bila tidak ditangani akan menimbulkan masalah pencemaran. Berikut beberapa metode pengolahan limbah padat yang umum diterapkan.\r\n\r\na.Penimbunan\r\nTerdapat dua cara penimbunan sampah yang umum dikenal, yaitu metode penimbunan terbuka atau open dumping dan metode sanitary landfill. Pada metode penimbunan terbuka, sampah dikumpulkan dan ditimbun begitu saja dalam lubang yang dibuat pada suatu lahan, biasanya di lokasi tempat pembuangan akhir (TPA). Metode penimbunan merupakan metode kuno yang memberikan dampak negatif lain. Di lahan penimbunan terbuka, berbagai hama dan kuman penyebab penyakit dapat berkembang biak. Gas metan yang dihasilkan oleh pembusukan sampah organik dapat menyebar ke udara dan menimbulkan bau busuk serta mudah terbakar. Cairan yang tercampur dengan sampah dapat merembes ke tanah dan mencemari tanah serta air. Bersama rembesan cairan tersebut, dapat terbawa zat-zat yang berbahaya bagi kesehatan dan lingkungan.\r\nBerbagai permasalahan yang ditimbulkan oleh metode open dumping menyebabkan dikembangkan metode penimbunan sampah yang lebih baik, yaitu sanitary landfill. Pada metode sanitary landfill, sampah ditimbun dalam lubang yang dialasi lapisan lempung dan lembaran plastik untuk mencegah perembesan limbah ke tanah. Sampah yang ditimbun dipadatkan, kemudian ditutupi dengan lapisan tanah tipis setiap hari. Hal ini akan mencegah tersebarnya gas metan yang dapat mencemari udara dan berkembangbiaknya berbagai macam penyebab penyakit.\r\nMetode sanitary landfill yang lebih modern, biasanya dibuat sistem lapisan ganda yaitu plastik, dan lempung. Kemudian dibuat pipa-pipa saluran untuk mengumpulkan cairan serta gas metan yang terbentuk dari proses pembusukan sampah. Gas tersebut kemudian dapat digunakan untuk menghasilkan listrik.\r\nb.Insinerasi\r\nInsinerasi adalah pembakaran limbah padat menggunakan suatu alat yang disebut insinerator. Kelebihan dari proses insinerasi adalah volume sampah berkurang sangat banyak, bisa mencapai 90 %. Selain itu, proses insinerasi menghasilkan panas yang dapat dimanfaatkan untuk menghasilkan listrik atau untuk memanaskan ruangan. Meski demikian, tidak semua jenis limbah padat dapat dibakar dalam insinerator. Jenis limbah padat yang cocok untuk insinerasi di antaranya adalah kertas, plastik, dan karet, sedangkan contoh jenis limbah padat yang kurang sesuai untuk insinerasi adalah kaca, sampah makanan, dan baterai.'),
(3, 'Pencemaran tanah', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLh_sgEU-uzQD12VYK-uALh1JVXOa8Genig&usqp=CAU', 'Pencemaran tanah adalah keadaan di mana bahan kimia buatan manusia masuk dan merubah lingkungan tanah alami. Pencemaran ini biasanya terjadi karena: kebocoran limbah AGRISAMUDRA, Jurnal Penelitian Vol.2 No. 1 Januari – Juni 2015 13 cair atau bahan kimia industri atau fasilitas komersial; penggunaan pestisida; masuknya air permukaan tanah tercemar ke dalam lapisan sub-permukaan; kecelakaan kendaraan pengangkut minyak, zat kimia, atau limbah; air limbah dari tempat penimbunan sampah serta limbah industri yang langsung dibuang ke tanah secara tidak memenuhi syarat (illegal dumping). Ketika suatu zat berbahaya/beracun telah mencemari permukaan tanah, maka ia dapat menguap, tersapu air hujan dan atau masuk ke dalam tanah. Pencemaran yang masuk ke dalam tanah kemudian terendap sebagai zat kimia beracun di tanah. Zat beracun di tanah tersebut dapat berdampak langsung kepada manusia ketika bersentuhan atau dapat mencemari air tanah dan udara di atasnya.'),
(4, 'Penanganan limbah cair', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiyYwFoCzk0xEbT9Prp7b2z-gu5Yj23PtgA&usqp=CAU', 'Limbah cair merupakan salah satu masalah utama sebuah pabrik atau perusahaan. Hal ini disebabkan karena limbah cair merupakan limbah yang sulit untuk diolah. Sering kali, limbah cair yg berbahaya dibuang begitu saja dan masuk ke lingkungan sekitar.\r\nKeberadaan limbah yang masuk dalam saluran lingkungan inilah yang menyebabkan masyarakat menjadi resah. Untuk Anda pemilik pabrik atau perusahaan tertentu yang menghasilkan limbah cair dan masih bingung mengenai cara pengolahannya, berikut ini adalah beberapa teknik pengolahan limbah cair yang bisa Anda lakukan.\r\n1. Dekomposisi\r\nSalah satu cara untuk mengolah limbah pabrik adalah dengan mencoba melakukan dekomposisi. Dekomposisi adalah sebuah proses pengolahan limbah cair yang dilakukan jika material limbah adalah makanan dari mikroorganisme. Dalam proses ini akan dilakukan penambahan mikroorganisme ke dalam limbah cair yang memiliki kandungan makanan tersebut sehingga kandungan makanan akan dihabiskan oleh mikroorganisme.\r\nTujuan dari penambahan mikroorganisme pada limbah ini adalah untuk membantu menghancurkan, menghilangkan dan juga men-dekompomposisi kandungan organik yang ada di dalam limbah cair tersebut. Setelah dekomposisi berhasil dan selesai dilakukan maka air hasil dekomposisi tersebut bisa dimasukkan ke saluran pembuangan air biasa.\r\n2. Filtrasi\r\nCara kedua yang bisa dilakukan untuk mengatasi masalah limbah cair adalah dengan menggunakan cara filtrasi. Filtrasi adalah sebuah teknik untuk menyaring limbah air yang keluar dari pabrik. Proses ini bisa dilakukan dengan cara menyaring dengan menggunakan alat, menggunakan bahan kimia atau menggunakan proses flotasi.\r\nProses flotasi adalah proses penanganan limbah dengan mengapungkan partikel dalam cairan sehingga penanganannya nanti menjadi lebih mudah. Salah satu contoh filtrasi dengan proses flotasi pada limbah cair adalah proses penanganan limbah yang mengandung minyak, misalnya limbah restoran.\r\n3. Penambahan Klorin\r\nSelanjutnya proses pengelolaan limbah cair juga bisa dilakukan dengan penambahan materi kimia ke dalam limbah tersebut. Salah satu materi kimia yang bisa digunakan adalah klorin. Penambahan klorin juga bisa digunakan untuk mengatasi limbah yang memiliki kandungan organisme penyebab penyakit.\r\nKlorin adalah salah satu senyawa kimia yang sangat populer untuk membantu memerangi bakteri dalam cairan. Misalnya, klorin paling sering digunakan untuk membunuh organisme berbahaya seperti  bakteri pada kolam renang.'),
(5, 'Syarat penting pembuangan air limbah di kota', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIg_9SOfO4VjMqLlr42eTNeqqjBLW0oRceeg&usqp=CAU', 'ebelum mengetahui tentang persyaratan pembuangan air limbah, ada baiknya Anda juga mengetahui terlebih dahulu tentang persyaratan umum yang harus dipenuhi untuk membangun IPAL, agar saat pembuangan air limbah prosesnya pun lebih lancar. Beberapa syarat tersebut seperti yang dijelaskan oleh Pemerintah Provinsi DKI Jakarta meliputi:\r\nSurat permohonan dengan tanda tangan di atas materai\r\nFotokopi akta pendirian, NPWP badan usaha, dan juga SK pengesahan pendirian\r\nJika dikuasakan ke orang lain, wajib melampirkan KTP dan surat kuasa bertanda tangan di atas materai\r\nFotokopi izin lingkungan\r\nHasil analisis laboratorium inlet air limbah\r\nMOU perusahaan dengan perusahaan perencana IPAL\r\nSertifikasi perusahaan atau konsultan perencana IPAL\r\nSertifikasi anggota tim perencana IPAL\r\nPersetujuan tetangga (kiri, kanan, depan, belakang disertai KTP)\r\nProposal teknis berisi seluruh perencanaan IPAL yang dijelaskan secara detail, mulai dari anggaran, desain, flow diagram, dan lainnya\r\nRekapitulasi pemakaian air untuk seluruh sumber air yang terpakai (dalam satuan m3)\r\nRekening pemakaian air selama minimal setahun terakhir dari seluruh sumber air\r\n\r\nSetelah mengetahui tentang persyaratan umum untuk pengajuan atas pembangunan IPAL, selanjutnya barulah Anda wajib mengetahui tentang syarat pembuangan air limbah kota. Biasanya setiap kota memiliki persyaratannya masing-masing, tapi merujuk kepada Peraturan Menteri Kesehatan Nomor 32 Tahun 2017 tentang Standar Baku Mutu Kesehatan Lingkungan, maka pembuangan air limbah harus memenuhi persyaratan kesehatan, yaitu:\r\nAir yang digunakan harus terlindungi dari sumber pencemaran, binatang yang membawa penyakit, dan berpotensi sebagai tempat perkembangbiakan bakteri atau virus\r\nAir yang digunakan aman dari kemungkinan adanya kontaminan\r\nAir yang digunakan tidak boleh ada koneksi silang dengan pipa air limbah di bawah permukaan tanah (jika menggunakan air perpipaan)');

-- --------------------------------------------------------

--
-- Table structure for table `user_sehatyuks`
--

CREATE TABLE `user_sehatyuks` (
  `id` int(11) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(1024) NOT NULL,
  `number` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_sehatyuks`
--

INSERT INTO `user_sehatyuks` (`id`, `firstName`, `lastName`, `gender`, `email`, `password`, `number`) VALUES
(25, 'Ihrat', 'Pramudya', 'laki', 'ihrat@gmail.com', '$2b$10$k/r9pxJcu3/bFZ5E/lyMr.KD5drcQShJwXfbK2T1bF.YuEtGy1AGa', '8878777'),
(26, 'Ihrat Pramudya', 'sya', 'Laki Laki', '12345@gmail.com', '$2b$10$FF2.afNMl8bcpqdboGWTZeg0PGOTeicbzokNB4E29DiwMwetUIwey', '867767765767');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer_table`
--
ALTER TABLE `answer_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `article_table`
--
ALTER TABLE `article_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `covid_table`
--
ALTER TABLE `covid_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `drug_table`
--
ALTER TABLE `drug_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lingkungan_table`
--
ALTER TABLE `lingkungan_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_sehatyuks`
--
ALTER TABLE `user_sehatyuks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answer_table`
--
ALTER TABLE `answer_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;

--
-- AUTO_INCREMENT for table `article_table`
--
ALTER TABLE `article_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `covid_table`
--
ALTER TABLE `covid_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `drug_table`
--
ALTER TABLE `drug_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `lingkungan_table`
--
ALTER TABLE `lingkungan_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user_sehatyuks`
--
ALTER TABLE `user_sehatyuks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
