-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 02 Des 2022 pada 18.32
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.1.12

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
-- Struktur dari tabel `answer_table`
--

CREATE TABLE `answer_table` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `answer_table`
--

INSERT INTO `answer_table` (`id`, `name`, `description`) VALUES
(2, 'ihrat@gmail.com', 'sayang');

-- --------------------------------------------------------

--
-- Struktur dari tabel `article_table`
--

CREATE TABLE `article_table` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `article_table`
--

INSERT INTO `article_table` (`id`, `title`, `description`) VALUES
(6, 'Menjaga Kesehatan saat pandemic', 'Meningkatnya kasus aktif Covid-19 yang diperparah dengan peralihan musim yang saat ini terjadi, menjadi pengingat bagi kita untuk terus menjaga kesehatan baik secara fisik maupun mental. Perubahan cuaca yang tak menentu juga menyebabkan tubuh seseorang menjadi terus menerus harus beradaptasi, sehingga tidak heran ketika seseorang memiliki sistem imun yang tidak cukup kuat, akan mudah terserang penyakit.\r\n\r\nMenurut Kotler, pola hidup sehat adalah gambaran dari aktivitas berdasarkan keinginan dan minat kita dan bagaimana pikiran kita menjalaninya dalam berinteraksi dengan lingkungan kita. Pola hidup sehat yang kita terapkan dapat secara positif kita tularkan kepada orang lain, khususnya kepada keluarga sehingga mereka juga dapat merasakan banyak manfaatnya.\r\n\r\nMelihat urgensi demikian, maka jalan keluar yang harus ditempuh adalah dengan memulai pola hidup sehat setiap harinya. Pola hidup sehat bisa dimulai dari merubah hal-hal kecil dalam kehidupan kita yang kurang sehat, sehingga nantinya diharapkan dapat menerapkan pola hidup sehat secara total dan kondisi tubuh akan lebih sehat dan bugar.\r\n\r\nBerikut ini adalah beberapa hal kecil yang dapat mulai kita perbaiki untuk bisa menerapkan pola hidup sehat.\r\n\r\n•	Cukupi kebutuhan nutrisi harian tubuh dengan dengan mengkonsumsi makanan dengan cukup serat.\r\n\r\n•	Memperbaiki pola waktu tidur menjadi 7-9 jam per malam.\r\n\r\n•	Mulai berfikir positif, sehingga kesehatan mental akan menjadi lebih baik.\r\n\r\n•	Rutin dalam melakukan olahraga, dimulai dengan olahraga ringan.\r\n\r\nDemikian beberapa hal sederhana yang bisa mulai kita lakukan untuk memperbaiki pola hidup kita, terutama pada masa pandemi Covid-19 dan pancaroba seperti saat ini. Mari, tetap terapkan protokol kesehatan, baik ketika beraktivitas di dalam maupun di luar ruangan. Masyarakat juga diimbau untuk segera divaksinasi jika belum, agar herd immunity  dapat segera terbentuk, sehingga kematian serta hospitalisasi akibat Covid-19 dapat lebih diminimalisir.\r\n'),
(7, 'Cara menjaga Kesehatan mata', 'Anggota tubuh yang kita miliki merupakan aset yang sangat berharga untuk kita dalam menjalankan kehidupan. Sehingga dengan demikian, menjaga kesehatan tubuh menjadi sebuah kewajiban yang harus dilakukan untuk menghindarkan dari berbagai penyakit yang dapat membahayakan dan mengganggu kesehatan anggota tubuh tersebut saat digunakan\r\nSalah satu anggota tubuh yang penting tersebut adalah mata. Mata yang sehat adalah mata yang  terbebas dari berbagai penyakit seperti mata kering, katarak, gangguan retina dan berbagai penyakit lainnya yang dapat mengganggu penglihatan seseorang.\r\nTips Menjaga Kesehatan\r\nMengetahui hal tersebut, maka tips menjaga kesehatan mata merupakan hal yang penting untuk diketahui, diantaranya adalah sebagai berikut:\r\n1. Hindari paparan langsung sinar matahari atau kemasukan benda asing dengan menggunakan pelindung atau kacamata saat berada di luar ruangan maupun saat berkendara\r\n2. Setelah 20 menit menatap layar gawai atau gadget secara langsung, palingkan mata selama 20 detik dengan melihat objek sejauh 20 meter\r\n3. Menjaga kebersihan mata serta tidak menggosok mata.\r\nDengan menerapkan berbagai cara menjaga kesehatan mata pada poin yang telah disebutkan diatas, diharapkan mampu meminimalisir kerusakan mata atau kaburnya penglihatan di tengah masyarakat.\r\nTetap terapkan perilaku hidup bersih dan sehat, serta melakukan pemeriksaan ke dokter mata apabila mengalami gangguan penglihatan, agar bisa segera mendapatkan penanganan secara cepat agar tidak menjadi masalah penglihatan yang jauh lebih buruk.\r\n'),
(8, 'Tips menjaga Kesehatan saat dipengungsian', 'Gempa dengan kekuatan magnitudo 5,6 di darat dan kedalaman mencapai 10 Km yang berpusat di kabupaten Cianjur pada 21 November 2022 yang lalu, telah menyebabkan 169.124 orang penduduk terdampak. Hasilnya, kini sebanyak 58.362 orang harus di evakuasi menuju tempat yang lebih aman.\r\nSaat ini diketahui bahwa para masyarakat yang harus mengungsi tersebut, tersebar di 9 titik tempat yang berbeda. Selama berada di lokasi pengungsian, masyarakat diharapkan untuk tetap bisa disiplin dalam menjaga kesehatan, hal ini dilakukan untuk tetap menjaga kesehatan fisik maupun mental, terutama di tengah pandemi seperti saat ini.\r\nTips Sehat Selama di Lokasi Pengungsian.\r\nBerikut ini adalah beberapa hal yang bisa dilakukan oleh masyarakat yang telah berhasil dievakuasi untuk menjaga kondisi kesehatannya, diantaranya adalah:\r\n•	Biasakan cuci tangan pakai sabun dengan air mengalir\r\n•	Menggunakan masker\r\n•	Lindungi tempat air bersih & makanan dari kotoran, debu dan lalat\r\n•	Tidak merokok di pengungsian\r\n•	Gunakan selimut & alas tidur di malam hari\r\n•	Lakukan buang air besar & kecil di jamban\r\n•	Kendalikan stress dengan melakukan kegiatan bersama\r\nDengan menjalankan berbagai aktivitas diatas, diharapkan kesehatan fisik maupun mental masyarakat selama berada di lokasi pengungsian dapat lebih terjaga.\r\nTetap disiplin perilaku hidup bersih dan sehat serta segera  melakukan pemeriksaan ke fasilitas pelayanan kesehatan yang tidak terdampak apabila mengalami gejala penyakit atau luka selama berada di lokasi pengungsian.\r\nTetap dengarkan informasi dari instansi resmi untuk menghindari kesalahan informasi serta  tidak bermain atau memasuki bangunan yang terdampak gempa, untuk menghindari potensi luka saat bangunan roboh.\r\n'),
(9, 'Mengetahui Bahaya Rokok Elektrik', 'Sejak kemunculan rokok elektrik di tengah masyarakat Indonesia, peredaran dan penggunaan rokok elektrik semakin menjamur di tengah masyarakat. Terlepas dari harga yang lebih terjangkau, rokok elektronik ternyata sama berbahayanya dengan rokok konvensional yang sudah lebih dulu beredar di tengah masyarakat.\r\nPada dasarnya, kedua jenis rokok tersebut sama-sama mengandung karsinogen atau bahan-bahan yang menginduksi kanker melalui kegiatan merokok yang melalui saluran pernapasan dan paru.\r\nSehingga dengan melihat kenyataan tersebut, berhenti dari kegiatan yang tidak sehat seperti merokok menggunakan rokok elektronik maupun konvensional, sudah seharusnya dilakukan oleh masyarakat untuk bisa meningkatkan kesehatan dalam tubuh.\r\nBahaya Rokok Elektrik Bagi Tubuh.\r\nBerikut ini adalah beberapa bahaya dari rokok elektrik yang perlu diketahui oleh masyarakat, diantaranya adalah:\r\n1.	Kandungan nikotin dalam rokok akan menimbulkan efek candu dan memicu depresi, napas pendek, kanker paru, kerusakan paru permanen, hingga kematian\r\n2.	Kandungan Glikol pada rokok elektrik akan mengiritasi paru-paru dan mata, serta menimbulkan gangguan saluran pernafasan seperti asma, sesak nafas, hingga obstruksi jalan napas.\r\n3.	Diasetil atau penambah rasa pada rokok elektrik akan menyebabkan penyakit paru obstruktif kronis\r\n4.	Memicu terjadinya kanker\r\nInformasi bahaya penggunaan rokok elektrik diharapkan dapat memberikan kesadaran bagi masyarakat yang ingin berpindah dari rokok konvensional ke rokok elektrik karena Misinformation yang mengatakan bahwa rokok elektrik lebih sehat.\r\nTetap terapkan perilaku hidup sehat dengan berhenti dari kegiatan merokok, dan segera hubungi Layanan Konsultasi Berhenti Merokok QUITLINE.INA di 0-800-177-6565 (free call service) apabila membutuhkan bantuan dalam berhenti merokok.\r\nTidak lupa untuk segera menghubungi fasilitas kesehatan apabila mengalami penyakit akibat rokok, agar bisa segera mendapatkan penanganan sedini mungkin.\r\n'),
(10, 'Menjaga Kesehatan saat pandemic', 'Meningkatnya kasus aktif Covid-19 yang diperparah dengan peralihan musim yang saat ini terjadi, menjadi pengingat bagi kita untuk terus menjaga kesehatan baik secara fisik maupun mental. Perubahan cuaca yang tak menentu juga menyebabkan tubuh seseorang menjadi terus menerus harus beradaptasi, sehingga tidak heran ketika seseorang memiliki sistem imun yang tidak cukup kuat, akan mudah terserang penyakit.\r\n\r\nMenurut Kotler, pola hidup sehat adalah gambaran dari aktivitas berdasarkan keinginan dan minat kita dan bagaimana pikiran kita menjalaninya dalam berinteraksi dengan lingkungan kita. Pola hidup sehat yang kita terapkan dapat secara positif kita tularkan kepada orang lain, khususnya kepada keluarga sehingga mereka juga dapat merasakan banyak manfaatnya.\r\n\r\nMelihat urgensi demikian, maka jalan keluar yang harus ditempuh adalah dengan memulai pola hidup sehat setiap harinya. Pola hidup sehat bisa dimulai dari merubah hal-hal kecil dalam kehidupan kita yang kurang sehat, sehingga nantinya diharapkan dapat menerapkan pola hidup sehat secara total dan kondisi tubuh akan lebih sehat dan bugar.\r\n\r\nBerikut ini adalah beberapa hal kecil yang dapat mulai kita perbaiki untuk bisa menerapkan pola hidup sehat.\r\n\r\n•	Cukupi kebutuhan nutrisi harian tubuh dengan dengan mengkonsumsi makanan dengan cukup serat.\r\n\r\n•	Memperbaiki pola waktu tidur menjadi 7-9 jam per malam.\r\n\r\n•	Mulai berfikir positif, sehingga kesehatan mental akan menjadi lebih baik.\r\n\r\n•	Rutin dalam melakukan olahraga, dimulai dengan olahraga ringan.\r\n\r\nDemikian beberapa hal sederhana yang bisa mulai kita lakukan untuk memperbaiki pola hidup kita, terutama pada masa pandemi Covid-19 dan pancaroba seperti saat ini. Mari, tetap terapkan protokol kesehatan, baik ketika beraktivitas di dalam maupun di luar ruangan. Masyarakat juga diimbau untuk segera divaksinasi jika belum, agar herd immunity  dapat segera terbentuk, sehingga kematian serta hospitalisasi akibat Covid-19 dapat lebih diminimalisir.\r\n'),
(11, 'Cara menjaga Kesehatan mata', 'Anggota tubuh yang kita miliki merupakan aset yang sangat berharga untuk kita dalam menjalankan kehidupan. Sehingga dengan demikian, menjaga kesehatan tubuh menjadi sebuah kewajiban yang harus dilakukan untuk menghindarkan dari berbagai penyakit yang dapat membahayakan dan mengganggu kesehatan anggota tubuh tersebut saat digunakan\r\nSalah satu anggota tubuh yang penting tersebut adalah mata. Mata yang sehat adalah mata yang  terbebas dari berbagai penyakit seperti mata kering, katarak, gangguan retina dan berbagai penyakit lainnya yang dapat mengganggu penglihatan seseorang.\r\nTips Menjaga Kesehatan\r\nMengetahui hal tersebut, maka tips menjaga kesehatan mata merupakan hal yang penting untuk diketahui, diantaranya adalah sebagai berikut:\r\n1. Hindari paparan langsung sinar matahari atau kemasukan benda asing dengan menggunakan pelindung atau kacamata saat berada di luar ruangan maupun saat berkendara\r\n2. Setelah 20 menit menatap layar gawai atau gadget secara langsung, palingkan mata selama 20 detik dengan melihat objek sejauh 20 meter\r\n3. Menjaga kebersihan mata serta tidak menggosok mata.\r\nDengan menerapkan berbagai cara menjaga kesehatan mata pada poin yang telah disebutkan diatas, diharapkan mampu meminimalisir kerusakan mata atau kaburnya penglihatan di tengah masyarakat.\r\nTetap terapkan perilaku hidup bersih dan sehat, serta melakukan pemeriksaan ke dokter mata apabila mengalami gangguan penglihatan, agar bisa segera mendapatkan penanganan secara cepat agar tidak menjadi masalah penglihatan yang jauh lebih buruk.\r\n'),
(12, 'Tips menjaga Kesehatan saat dipengungsian', 'Gempa dengan kekuatan magnitudo 5,6 di darat dan kedalaman mencapai 10 Km yang berpusat di kabupaten Cianjur pada 21 November 2022 yang lalu, telah menyebabkan 169.124 orang penduduk terdampak. Hasilnya, kini sebanyak 58.362 orang harus di evakuasi menuju tempat yang lebih aman.\r\nSaat ini diketahui bahwa para masyarakat yang harus mengungsi tersebut, tersebar di 9 titik tempat yang berbeda. Selama berada di lokasi pengungsian, masyarakat diharapkan untuk tetap bisa disiplin dalam menjaga kesehatan, hal ini dilakukan untuk tetap menjaga kesehatan fisik maupun mental, terutama di tengah pandemi seperti saat ini.\r\nTips Sehat Selama di Lokasi Pengungsian.\r\nBerikut ini adalah beberapa hal yang bisa dilakukan oleh masyarakat yang telah berhasil dievakuasi untuk menjaga kondisi kesehatannya, diantaranya adalah:\r\n•	Biasakan cuci tangan pakai sabun dengan air mengalir\r\n•	Menggunakan masker\r\n•	Lindungi tempat air bersih & makanan dari kotoran, debu dan lalat\r\n•	Tidak merokok di pengungsian\r\n•	Gunakan selimut & alas tidur di malam hari\r\n•	Lakukan buang air besar & kecil di jamban\r\n•	Kendalikan stress dengan melakukan kegiatan bersama\r\nDengan menjalankan berbagai aktivitas diatas, diharapkan kesehatan fisik maupun mental masyarakat selama berada di lokasi pengungsian dapat lebih terjaga.\r\nTetap disiplin perilaku hidup bersih dan sehat serta segera  melakukan pemeriksaan ke fasilitas pelayanan kesehatan yang tidak terdampak apabila mengalami gejala penyakit atau luka selama berada di lokasi pengungsian.\r\nTetap dengarkan informasi dari instansi resmi untuk menghindari kesalahan informasi serta  tidak bermain atau memasuki bangunan yang terdampak gempa, untuk menghindari potensi luka saat bangunan roboh.\r\n'),
(13, 'Mengetahui Bahaya Rokok Elektrik', 'Sejak kemunculan rokok elektrik di tengah masyarakat Indonesia, peredaran dan penggunaan rokok elektrik semakin menjamur di tengah masyarakat. Terlepas dari harga yang lebih terjangkau, rokok elektronik ternyata sama berbahayanya dengan rokok konvensional yang sudah lebih dulu beredar di tengah masyarakat.\r\nPada dasarnya, kedua jenis rokok tersebut sama-sama mengandung karsinogen atau bahan-bahan yang menginduksi kanker melalui kegiatan merokok yang melalui saluran pernapasan dan paru.\r\nSehingga dengan melihat kenyataan tersebut, berhenti dari kegiatan yang tidak sehat seperti merokok menggunakan rokok elektronik maupun konvensional, sudah seharusnya dilakukan oleh masyarakat untuk bisa meningkatkan kesehatan dalam tubuh.\r\nBahaya Rokok Elektrik Bagi Tubuh.\r\nBerikut ini adalah beberapa bahaya dari rokok elektrik yang perlu diketahui oleh masyarakat, diantaranya adalah:\r\n1.	Kandungan nikotin dalam rokok akan menimbulkan efek candu dan memicu depresi, napas pendek, kanker paru, kerusakan paru permanen, hingga kematian\r\n2.	Kandungan Glikol pada rokok elektrik akan mengiritasi paru-paru dan mata, serta menimbulkan gangguan saluran pernafasan seperti asma, sesak nafas, hingga obstruksi jalan napas.\r\n3.	Diasetil atau penambah rasa pada rokok elektrik akan menyebabkan penyakit paru obstruktif kronis\r\n4.	Memicu terjadinya kanker\r\nInformasi bahaya penggunaan rokok elektrik diharapkan dapat memberikan kesadaran bagi masyarakat yang ingin berpindah dari rokok konvensional ke rokok elektrik karena Misinformation yang mengatakan bahwa rokok elektrik lebih sehat.\r\nTetap terapkan perilaku hidup sehat dengan berhenti dari kegiatan merokok, dan segera hubungi Layanan Konsultasi Berhenti Merokok QUITLINE.INA di 0-800-177-6565 (free call service) apabila membutuhkan bantuan dalam berhenti merokok.\r\nTidak lupa untuk segera menghubungi fasilitas kesehatan apabila mengalami penyakit akibat rokok, agar bisa segera mendapatkan penanganan sedini mungkin.\r\n');

-- --------------------------------------------------------

--
-- Struktur dari tabel `drug_table`
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
-- Dumping data untuk tabel `drug_table`
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
-- Struktur dari tabel `user_sehatyuks`
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
-- Dumping data untuk tabel `user_sehatyuks`
--

INSERT INTO `user_sehatyuks` (`id`, `firstName`, `lastName`, `gender`, `email`, `password`, `number`) VALUES
(25, 'Ihrat', 'Pramudya', 'laki', 'ihrat@gmail.com', '$2b$10$k/r9pxJcu3/bFZ5E/lyMr.KD5drcQShJwXfbK2T1bF.YuEtGy1AGa', '8878777');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `answer_table`
--
ALTER TABLE `answer_table`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `article_table`
--
ALTER TABLE `article_table`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `drug_table`
--
ALTER TABLE `drug_table`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user_sehatyuks`
--
ALTER TABLE `user_sehatyuks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `answer_table`
--
ALTER TABLE `answer_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `article_table`
--
ALTER TABLE `article_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `drug_table`
--
ALTER TABLE `drug_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT untuk tabel `user_sehatyuks`
--
ALTER TABLE `user_sehatyuks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
