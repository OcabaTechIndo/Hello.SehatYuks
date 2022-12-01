-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Des 2022 pada 15.55
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
(1, 'test', 'test'),
(3, 'test tes kedua', 'test Skuy MAri mari'),
(4, 'test tes kedua', 'test Skuy MAri mari'),
(5, 'test tes kedua', 'test Skuy MAri mari');

-- --------------------------------------------------------

--
-- Struktur dari tabel `drug_table`
--

CREATE TABLE `drug_table` (
  `id` int(11) NOT NULL,
  `background` text NOT NULL,
  `name_general` text NOT NULL,
  `image_drug` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `drug_table`
--

INSERT INTO `drug_table` (`id`, `background`, `name_general`, `image_drug`) VALUES
(12, '\r\n\r\nSalbutamol adalah agonis reseptor adrenergik beta-2 yang digunakan untuk mengobati asma, bronkitis, PPOK, serta mencegah bronkospasme akibat olahraga.', '\r\nSalbutamol', 'DB01001'),
(14, 'Salbutamol is a beta-2 adrenergic receptor agonist used to treat asthma, bronchitis, and COPD, as well as prevent exercise-induced bronchospasms.', 'Salbutamol', 'https://upload.wikimedia.org/wikipedia/commons/d/da/4-methoxybenzalmalononitrile.png'),
(15, 'Aspirin is a salicylate used to treat pain, fever, inflammation, and migraines, and reduce the risk of major adverse cardiovascular events.', 'Acetylsalicylic acid', 'https://upload.wikimedia.org/wikipedia/commons/8/87/Aspirin_8181.JPG'),
(16, 'Acetaminophen is an analgesic drug used alone or in combination with opioids for pain management, and as an antipyretic agent.', 'Acetaminophen', 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Acetaminophen_ball-and-stick.png'),
(17, 'Diphenhydramine is an H1 receptor antihistamine used in the treatment of seasonal allergies, and various allergic reactions including sneezing, runny nose, itchy/watery eyes, itching of nose or throat, pruritus, urticaria, insect bites/stings, allergic rashes.', 'Diphenhydramine', 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Diphenhydramine_Structure.png'),
(18, 'Epinephrine is a hormone and neurotransmitter used to treat allergic reactions, restore cardiac rhythm, and control mucosal congestion, glaucoma, and asthma.', 'Epinephrine', 'https://upload.wikimedia.org/wikipedia/commons/a/aa/%28RS%29-epinephrine_Formula_V.1.png'),
(19, 'Tramadol is a centrally-acting opioid agonist and SNRI (serotonin/norepinephrine reuptake inhibitor) used for the management of moderate to severe pain in adults.', 'Tramadol', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Tramadol_Structure.svg'),
(20, 'Salbutamol is a beta-2 adrenergic receptor agonist used to treat asthma, bronchitis, and COPD, as well as prevent exercise-induced bronchospasms.', 'Salbutamol', 'https://upload.wikimedia.org/wikipedia/commons/d/da/4-methoxybenzalmalononitrile.png'),
(21, 'Aspirin is a salicylate used to treat pain, fever, inflammation, and migraines, and reduce the risk of major adverse cardiovascular events.', 'Acetylsalicylic acid', 'https://upload.wikimedia.org/wikipedia/commons/8/87/Aspirin_8181.JPG'),
(22, 'Acetaminophen is an analgesic drug used alone or in combination with opioids for pain management, and as an antipyretic agent.', 'Acetaminophen', 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Acetaminophen_ball-and-stick.png'),
(23, 'Diphenhydramine is an H1 receptor antihistamine used in the treatment of seasonal allergies, and various allergic reactions including sneezing, runny nose, itchy/watery eyes, itching of nose or throat, pruritus, urticaria, insect bites/stings, allergic rashes.', 'Diphenhydramine', 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Diphenhydramine_Structure.png'),
(24, 'Epinephrine is a hormone and neurotransmitter used to treat allergic reactions, restore cardiac rhythm, and control mucosal congestion, glaucoma, and asthma.', 'Epinephrine', 'https://upload.wikimedia.org/wikipedia/commons/a/aa/%28RS%29-epinephrine_Formula_V.1.png'),
(25, 'Tramadol is a centrally-acting opioid agonist and SNRI (serotonin/norepinephrine reuptake inhibitor) used for the management of moderate to severe pain in adults.', 'Tramadol', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Tramadol_Structure.svg');

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
-- AUTO_INCREMENT untuk tabel `article_table`
--
ALTER TABLE `article_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `drug_table`
--
ALTER TABLE `drug_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `user_sehatyuks`
--
ALTER TABLE `user_sehatyuks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
