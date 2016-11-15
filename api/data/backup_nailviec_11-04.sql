-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.13-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for reselleradmin_nailviec
DROP DATABASE IF EXISTS `reselleradmin_nailviec`;
CREATE DATABASE IF NOT EXISTS `reselleradmin_nailviec` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `reselleradmin_nailviec`;


-- Dumping structure for table reselleradmin_nailviec.areas
DROP TABLE IF EXISTS `areas`;
CREATE TABLE IF NOT EXISTS `areas` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `TotalShops` int(11) NOT NULL,
  `TotalJobs` int(11) NOT NULL,
  `Population` int(11) NOT NULL,
  `StateId` int(11) NOT NULL,
  `Description` mediumtext NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

-- Dumping data for table reselleradmin_nailviec.areas: 100 rows
DELETE FROM `areas`;
/*!40000 ALTER TABLE `areas` DISABLE KEYS */;
INSERT INTO `areas` (`Id`, `Name`, `TotalShops`, `TotalJobs`, `Population`, `StateId`, `Description`) VALUES
	(1, 'Houston', 0, 0, 2195914, 44, '\r\n	<p>Mật độ d&acirc;n số trong năm 2012: 2,160,821 (100% nội đ&ocirc; - urban, 0% ngoại &ocirc; - rural).<br />\r\n<br />\r\nD&acirc;n số thay đổi từ năm 2000: +10.6%<br />\r\n<img src="https://baonail.com/images/male_sign.png" /><strong>Nam</strong>: 1,084,312 - (50.2%)<br />\r\n<img src="https://baonail.com/images/female_sign.png" /><strong>Nữ</strong>: 1,076,509 - (49.8%)<br />\r\nTỷ lệ sắc d&acirc;n trong khu vực:</p>\r\n\r\n<ul>\r\n	<li><strong>Mễ-Hispanic - </strong>953,514 (44.4%)</li>\r\n	<li><strong>Mỹ trắng-White - </strong>555,237 (25.9%)</li>\r\n	<li><strong>Mỹ đen-Black - </strong>486,760 (22.7%)</li>\r\n	<li><strong>&Aacute; ch&acirc;u-Asian - </strong>118,907 (5.5%)</li>\r\n	<li><strong>Sắc d&acirc;n kh&aacute;c - Two or more races - </strong>24,189 (1.1%)</li>\r\n	<li><strong>American Indian alone - </strong>3,805 (0.2%)</li>\r\n	<li><strong>Sắc d&acirc;n kh&aacute;c - </strong>2,482 (0.1%)</li>\r\n	<li><strong>Native Hawaiian and Other Pacific Islander alone - </strong>1,039 (0.05%)</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Những th&agrave;nh phố, khu vực l&acirc;n cận:</strong> <a href="https://baonail.com/West-University-Place-Texas.html">West University Place, TX</a> (2.1 miles ), <a href="https://baonail.com/Southside-Place-Texas.html">Southside Place, TX</a> (2.2 miles ), <a href="https://baonail.com/Bellaire-Texas.html">Bellaire, TX</a> (2.5 miles ), <a href="https://baonail.com/Hilshire-Village-Texas.html">Hilshire Village, TX</a> (2.6 miles ), <a href="https://baonail.com/Hunters-Creek-Village-Texas.html">Hunters Creek Village, TX</a> (2.7 miles ), <a href="https://baonail.com/Spring-Valley-Texas.html">Spring Valley, TX</a> (2.7 miles ), <a href="https://baonail.com/Piney-Point-Village-Texas.html">Piney Point Village, TX</a> (2.8 miles ), <a href="https://baonail.com/Hedwig-Village-Texas.html">Hedwig Village, TX</a> (2.9 miles ).</p>\r\n	'),
	(2, 'San Antonio', 0, 0, 1409019, 44, ''),
	(3, 'Dallas', 0, 0, 1257676, 44, ''),
	(4, 'Austin', 0, 0, 885400, 44, ''),
	(5, 'Fort Worth', 0, 0, 792727, 44, ''),
	(6, 'El Paso', 0, 0, 674433, 44, ''),
	(7, 'Arlington', 0, 0, 379577, 44, ''),
	(8, 'Corpus Christi', 0, 0, 316381, 44, ''),
	(9, 'Plano', 0, 0, 274409, 44, ''),
	(10, 'Laredo', 0, 0, 248142, 44, ''),
	(11, 'Lubbock', 0, 0, 239538, 44, ''),
	(12, 'Garland', 0, 0, 234566, 44, ''),
	(13, 'Irving', 0, 0, 228653, 44, ''),
	(14, 'Amarillo', 0, 0, 196429, 44, ''),
	(15, 'Grand Prairie', 0, 0, 183372, 44, ''),
	(16, 'Brownsville', 0, 0, 181860, 44, ''),
	(17, 'Pasadena', 0, 0, 152735, 44, ''),
	(18, 'McKinney', 0, 0, 148559, 44, ''),
	(19, 'Mesquite', 0, 0, 143484, 44, ''),
	(20, 'Killeen', 0, 0, 137147, 44, ''),
	(21, 'Frisco', 0, 0, 136791, 44, ''),
	(22, 'McAllen', 0, 0, 136639, 44, ''),
	(23, 'Waco', 0, 0, 129030, 44, ''),
	(24, 'Carrollton', 0, 0, 126700, 44, ''),
	(25, 'Midland', 0, 0, 123933, 44, ''),
	(26, 'Denton', 0, 0, 123099, 44, ''),
	(27, 'Abilene', 0, 0, 120099, 44, ''),
	(28, 'Beaumont', 0, 0, 117796, 44, ''),
	(29, 'Odessa', 0, 0, 110720, 44, ''),
	(30, 'Round Rock', 0, 0, 109821, 44, ''),
	(31, 'Wichita Falls', 0, 0, 104898, 44, ''),
	(32, 'Richardson', 0, 0, 104475, 44, ''),
	(33, 'Lewisville', 0, 0, 101074, 44, ''),
	(34, 'Tyler', 0, 0, 100223, 44, ''),
	(35, 'Pearland', 0, 0, 100065, 44, ''),
	(36, 'College Station', 0, 0, 100050, 44, ''),
	(37, 'San Angelo', 0, 0, 97492, 44, ''),
	(38, 'Allen', 0, 0, 92020, 44, ''),
	(39, 'League City', 0, 0, 90983, 44, ''),
	(40, 'Sugar Land', 0, 0, 83860, 44, ''),
	(41, 'Longview', 0, 0, 81443, 44, ''),
	(42, 'Mission', 0, 0, 81050, 44, ''),
	(43, 'Edinburg', 0, 0, 80836, 44, ''),
	(44, 'Bryan', 0, 0, 78709, 44, ''),
	(45, 'Baytown', 0, 0, 75418, 44, ''),
	(46, 'Pharr', 0, 0, 73790, 44, ''),
	(47, 'Temple', 0, 0, 70190, 44, ''),
	(48, 'Missouri City', 0, 0, 70185, 44, ''),
	(49, 'Flower Mound', 0, 0, 68609, 44, ''),
	(50, 'North Richland Hills', 0, 0, 67317, 44, ''),
	(51, 'Harlingen', 0, 0, 65665, 44, ''),
	(52, 'Victoria', 0, 0, 65098, 44, ''),
	(53, 'New Braunfels', 0, 0, 63279, 44, ''),
	(54, 'Conroe', 0, 0, 63032, 44, ''),
	(55, 'Cedar Park', 0, 0, 61238, 44, ''),
	(56, 'Mansfield', 0, 0, 60872, 44, ''),
	(57, 'Rowlett', 0, 0, 58043, 44, ''),
	(58, 'Georgetown', 0, 0, 54898, 44, ''),
	(59, 'Port Arthur', 0, 0, 54135, 44, ''),
	(60, 'San Marcos', 0, 0, 54076, 44, ''),
	(61, 'Pflugerville', 0, 0, 53752, 44, ''),
	(62, 'Euless', 0, 0, 53224, 44, ''),
	(63, 'DeSoto', 0, 0, 51483, 44, ''),
	(64, 'Grapevine', 0, 0, 50195, 44, ''),
	(65, 'Galveston', 0, 0, 48733, 44, ''),
	(66, 'Bedford', 0, 0, 48592, 44, ''),
	(67, 'Cedar Hill', 0, 0, 46663, 44, ''),
	(68, 'Texas City', 0, 0, 46081, 44, ''),
	(69, 'Wylie', 0, 0, 44575, 44, ''),
	(70, 'Haltom City', 0, 0, 43580, 44, ''),
	(71, 'Keller', 0, 0, 42907, 44, ''),
	(72, 'Rockwall', 0, 0, 40922, 44, ''),
	(73, 'Burleson', 0, 0, 40714, 44, ''),
	(74, 'Coppell', 0, 0, 40342, 44, ''),
	(75, 'Huntsville', 0, 0, 39795, 44, ''),
	(76, 'Duncanville', 0, 0, 39605, 44, ''),
	(77, 'The Colony', 0, 0, 39458, 44, ''),
	(78, 'Sherman', 0, 0, 39296, 44, ''),
	(79, 'Hurst', 0, 0, 38448, 44, ''),
	(80, 'Lancaster', 0, 0, 38071, 44, ''),
	(81, 'Friendswood', 0, 0, 37587, 44, ''),
	(82, 'Texarkana', 0, 0, 37442, 44, ''),
	(83, 'Weslaco', 0, 0, 37093, 44, ''),
	(84, 'Lufkin', 0, 0, 36085, 44, ''),
	(85, 'Schertz', 0, 0, 35929, 44, ''),
	(86, 'San Juan', 0, 0, 35593, 44, ''),
	(87, 'Del Rio', 0, 0, 35589, 44, ''),
	(88, 'La Porte', 0, 0, 34654, 44, ''),
	(89, 'Nacogdoches', 0, 0, 33868, 44, ''),
	(90, 'Deer Park', 0, 0, 33237, 44, ''),
	(91, 'Rosenberg', 0, 0, 33188, 44, ''),
	(92, 'Copperas Cove', 0, 0, 33122, 44, ''),
	(93, 'Little Elm', 0, 0, 32701, 44, ''),
	(94, 'Socorro', 0, 0, 32517, 44, ''),
	(95, 'Kyle', 0, 0, 31760, 44, ''),
	(96, 'Leander', 0, 0, 31717, 44, ''),
	(97, 'Farmers Branch', 0, 0, 31664, 44, ''),
	(98, 'Waxahachie', 0, 0, 31591, 44, ''),
	(99, 'Cleburne', 0, 0, 29747, 44, ''),
	(100, 'Southlake', 0, 0, 28234, 44, '');
/*!40000 ALTER TABLE `areas` ENABLE KEYS */;


-- Dumping structure for table reselleradmin_nailviec.jobs
DROP TABLE IF EXISTS `jobs`;
CREATE TABLE IF NOT EXISTS `jobs` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `NailShopId` int(11) NOT NULL,
  `JobStatusId` int(11) NOT NULL,
  `Title` text NOT NULL,
  `Body` text NOT NULL,
  `PhoneContact` text NOT NULL,
  `DateUpdated` datetime NOT NULL,
  `Salary` text NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- Dumping data for table reselleradmin_nailviec.jobs: 33 rows
DELETE FROM `jobs`;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` (`Id`, `NailShopId`, `JobStatusId`, `Title`, `Body`, `PhoneContact`, `DateUpdated`, `Salary`) VALUES
	(1, 1, 2, 'Cần thợ bột và tay chân nước', 'Tiệm ở vùng Clear Lake, khu Mỹ trắng, cần thợ bột và tay chân nước, bao lương hoặc ăn chia tùy theo khả năng.', 'Work: 281-480-4050 or Cell: 281-736-8579', '2016-04-26 00:00:00', ''),
	(2, 2, 2, 'Cần nhiều thợ nail..!!', 'Cần nhiều thợ nail giỏi biết làm bột 2 màu (pink/white) Fulltime hay Parttime... Bao lương $700tuần/6 ngày, chân tay nước $600tuần/6 ngày hơn chia 6/4... Tiệm khu mỹ trắng, tiền típ cao, chỗ làm thoải mái... Tiệm cách Bellaire 15" phút... Người giới thiệu hay người mới vào sẽ nhận được $500 Cash. ', 'Kelvin 832-506-8838 <br/> Thanh 832-785-7897', '2016-04-26 00:00:00', ''),
	(3, 3, 2, 'Cần nhiều thợ nail ..!', 'Cần nhiều thợ nail giỏi biết làm bột 2 màu (pink/white) Fulltime hay Parttime... Bao lương $700tuần/6 ngày, chân tay nước $600tuần/6 ngày hơn chia 6/4... Tiệm khu mỹ trắng, tiền típ cao, chỗ làm thoải mái... Tiệm cách Bellaire 15" phút... Người giới thiệu hay người mới vào sẽ nhận đựcc $500 Cash.', 'Kelvin 832-506-8838 <br/> Thanh 832-785-7897', '2016-04-26 00:00:00', ''),
	(4, 4, 2, 'CẦN THỢ NAIL!!!', 'Tiệm ở khu Royal Oaks Kirkwood và Westheimer khách rất sang và cho nhiều tip,cần gấp thợ bột giỏi 2 màu và thợ giỏi chân tay nước, shellac, waxing . nếu biết làm thêm facial, eyelash càng tốt. Có bao lương cho thợ có kinh nghiệm. ', '(281)759-9997 or (713)922-1096', '2016-04-26 00:00:00', ''),
	(5, 5, 2, 'CẦN THỢ NAILS (713) 380-7273', 'TIỆM NAILS VÙNG 290 CẦN THỢ LÀM BỘT HOẶC TAY CHÂN NƯỚC FULL OR PART TIME, CHỖ LÀM VIỆC VUI VẺ THOẢI MÁI NHƯ GIA ĐÌNH, BẢO ĐẢM LƯƠNG HẬU. CHỊ EM VÙNG HWY 6 & JONES , FM 1960 CẦN VIỆC LÀM XIN GỌI SỐ PHONE 713-380-7273 (TONY)', '713-380-7273 (TONY)', '2016-04-25 00:00:00', ''),
	(6, 6, 2, 'Cần thợ nails', 'Tiệm vùng 610 & South Main cần thợ bột và tay chân nước bao $700/tuần hơn chia 6/4. Thợ mới ra trường OK . SUNDAY CLOSED', '832-744-1043', '2016-04-25 00:00:00', ''),
	(7, 7, 2, 'CẦN THỢ BỘT HOẶC TAY CHÂN NƯỚC', 'TIỆM NAILS VÙNG 290 & WEST RD CẦN THỢ LÀM BỘT HOẶC TAY CHÂN NƯỚC FULL OR PART TIME, CHỖ LÀM VIỆC VUI VẺ THOẢI MÁI NHƯ GIA ĐÌNH, BẢO ĐẢM LƯƠNG HẬU. CHỊ EM VÙNG HWY 6 & JONES , FM 1960 CẦN VIỆC LÀM XIN GỌI SỐ PHONE', '281-785-8143 OR 281-469-5488', '2016-04-24 00:00:00', ''),
	(8, 8, 2, 'CẦN THỢ NAIL!!!', 'Tiệm nail ở Westheimer & Gener cần nhiều thợ giỏi làm P&W, bột màu, bột nhúng, làm lông mi, facial, chân tay nước (phải biết design). Bao lương $800/tuần, tip $300/tuần. ', '832-660-5580 or 832-633-4738', '2016-04-24 00:00:00', ''),
	(9, 10, 2, 'Cần Thợ Nails', 'Tiệm trong khu chợ Foodtown đối diện chợ Hồng Kông 2 (south 45 ) đang cần thợ. Full time hoặc part time. Bao lương Tuỳ theo khả năng. Tiệm đóng cửa chủ nhật. Chỗ làm thoải mái, vui vẻ.', '281-896-1075 or 281-481-9169', '2016-04-24 00:00:00', ''),
	(10, 11, 2, 'CẦN THỢ NAILS GẤP ! ! ! !', 'CẦN GẤP THỢ NAILS CÓ KINH NGHIỆM LÀM BỘT PINK & WHITE, TAY CHÂN NƯỚC LÀM FULL TIME HAY PART TIME. BAO LƯƠNG $750 - $850/ TUẦN TUỲ THEO KINH NGHIỆM. CHỖ LÀM VUI VẺ, THOẢI MÁI. GỌI ĐI LÀM LIỀN.\r\n	TIỆM MỞ CỬA 10:00 AM - 7:30 PM, CHỦ NHẬT 11:00 am - 5:00 pm.\r\n\r\n	VUI LÒNG GỌI CELL PHONE: (832) 868-8518.\r\n	THUẬN TIỆN CHO ANH CHỊ Ở VÙNG NORTHWEST HOUSTON\r\n	I45 N EXIT 62 RANKIN RD. CÁCH CHỢ THẮNG HƯNG 10P LÁI XE.\r\n	', '(832) 868-8518', '2016-04-22 00:00:00', ''),
	(11, 12, 2, 'CẦN THỢ NAILS KHU 249 VÀ LOUETTA', 'Cần thợ bột có kinh nghiệm lam gioi bot pink and white, bao lương $700-$840/tuần, có nhận thợ part time', 'Andy (832)494-8574', '2016-04-22 00:00:00', ''),
	(12, 13, 2, 'Cần Thợ Nails', 'Tiệm Regal nail ở Vintage Park 249/Louetta Rd cần thợ bột 2 màu (pink & white) Nam hoặc Nữ, và chân tay nước. Khách rất lịch sự và tip hậu.', 'Nhung (832) 717-5342 hoặc (832) 966-9100', '2016-04-21 00:00:00', ''),
	(13, 14, 2, 'CẦN THỢ NAIL GẤP!!!', 'Tiệm mới vùng River Oak và Montrose, 59 South & Kirby đang cần thợ nam/nữ bột và tay chân nước giỏi, wax & eyelashes extension, full or part time. Lương ăn chia hoặc bao tùy theo khả năng. Khu Mỹ trắng, chỗ làm thoải mái & vui vẻ.', '713-521-5886 or 281-907-3292', '2016-04-20 00:00:00', ''),
	(14, 15, 2, 'Introductory Sale, New model Pedi-Spa ENVISION BENCH. WORK SMARTER not HARDER', 'Không chỉ là mẫu mã sang trọng và những tính năng thông minh đặc biêt chỉ tìm thấy tại Lexor, chất lượng sản phẩm và cung cách phục vụ cũng là điều chúng tôi quan tâm hàng đầu. Ghế Spa Perdicure của Lexor chắc chắn sẽ giúp quí vị tiết kiệm thời gian, làm việc hiệu quả và thu hút nhiều khách hàng hơn.\r\n	Mẫu mã nào là thích hợp cho tiệm nail của quí vị ? Package nào sẽ phù hợp với túi tiền nhưng vẫn đầy đủ tiện nghi sử dụng?\r\n	Xin liên lạc với chúng tôi để được tư vấn\r\n	', 'office : (281) 879-7550\r\n	cell : (832) 276-8393\r\n	email : thuy@lexor.com', '2016-04-20 00:00:00', ''),
	(15, 16, 2, 'Cần gấp thơ Bột và chân tay nước', 'Tiệm đông khách cần gắp thợ bột ( nam nữ ) bao lương $1,000/ 1 tuần. Thợ chân tay nước ( nam nữ) $800/1 tuần.', 'Vicky : (713) 922-8018 <br/> Cách hồng kong 3 và 4 (30phut).', '2016-04-19 00:00:00', ''),
	(16, 17, 2, 'MEMORIAL BUNKER HILL&I10... CẦN GẤP 10 THỢ NAILS', 'TIỆM MỚI MỞ VÙNG MEMORIAL BUNKER HILL & I10 TRONG HEB CENTER. ĐANG CẦN NHIỀU THỢ NỮ FULL TIME OR PART TIME, GIỎI EVERYTHING VA PINK & WHITE, KHU KHÁCH MỸ TRẮNG ,TIP CAO BAO LƯƠNG $700-$1,000/TUẦN. VÀ CẦN RẤT NHIỀU TAY CHÂN NƯỚC PHẢI BIẾT LÀM SHELLAC GIỎI LƯƠNG $600-$800/TUẦN TUỲ THEO KHẢ NĂNG. PHAI BIET TIENG ANH. ', 'CINDY (832)491-0860', '2016-04-21 00:00:00', ''),
	(17, 18, 2, 'Cần thợ nails gấp gấp gấp ..!!', 'Tiệm nằm ở đường 45 South và đường 10 East-Bellway A, cần thợ bột và thợ chân tay nước, bao lương cao', '713-498-7188 để biết thêm chi tiết.', '2016-04-18 00:00:00', ''),
	(18, 19, 2, 'CẦN THỢ NAIL !!!', 'Cần thợ nails full time & part time, chỗ làm vui vẻ, tip cao, bao lương $700/tuần. Tiệm cách Hong Kong 2 . 10 phút lái xe . Cơ Hội cho người đang Tìm chỗ làm ổn định , lâu dài', 'Tracy : (281) 912-8644.', '2016-04-18 00:00:00', ''),
	(19, 20, 2, 'CẦN THỢ BỘT và Chân Tay Nước', 'Cần thợ bột và thợ tay chân nước , phải làm chủ nhật , thợ bột bao lương $720 một tuần làm 6 ngày , hơn Ăn chia 6/4', 'Sương Cell : (832) 768- 3524', '2016-04-18 00:00:00', ''),
	(20, 25, 2, 'Cần Thợ Nail', 'Cần Nhiều Thợ Nail Làm Được Bột Hai Màu (pink & white) Nơi Làm Việc Trong Khu Mỹ Trắng Khách Sang, Tip Hâu. Cách Houston Downtown 5 Miles. Bao Lương, Hay Ăn Chia', 'Hoàng Qua Số Phone (281) 891-0991', '2016-04-16 00:00:00', ''),
	(21, 26, 2, 'Cần Thợ Nails Rice Village', 'Cần thợ nails nữ có kinh nghiệm, thợ tay chân nước, full time or part time. Khách mỹ trắng, lương cao tip nhiều.', '(281)-883-6987', '2016-04-15 00:00:00', ''),
	(22, 27, 2, 'CẦN THỢ NAILS!!! NEW...NEW...NEW', 'Cần thơ nails NỮ kinh nghiệm làm bột Pink and white (bao lương $750/tuần) và thợ chân tay nước.\r\n	Tiệm khu Memorial & I10, lương cao, tip hậu, chỗ làm việc vui vẻ, thoải mái. ', '713-468-9999', '2016-04-14 00:00:00', ''),
	(23, 28, 2, 'Cần thợ nail gấp ( bao lương hoặc ăn chia )', 'Cần thợ bột và thợ làm tay chân nước, wax facial , eye lash , body massage , bao lương Từ $1,200-$1,500 / 2 Tuần tùy theo khả năng , hơn chia 6/4 , hoặc ăn chia , part time , full time , Tiệm ít thợ , khách trắng lịch sự , típs cao không khí làm việc như . Gia đình , khu vực Highway 6 & 529 , cần thợ làm lâu dài , Gọi đi làm ngay', '(832) 518-9449 hoặc : (281) 345-4444', '2016-04-13 00:00:00', ''),
	(24, 29, 2, 'Cần nhiều thợ Nails Full-time và Part-time', 'Cần nhiều thợ Nails làm bột Full-time và Part-time ở hai location.\r\n	1. Signature Nails gần Willowbrook Mall.\r\n	2. Lush and Co. Naile - FM 529 and Highway 6.\r\n	Bao lương tuỳ theo khả năng.\r\n	Tiệm cần tuyển người clean up ', '2819193260 (MiMi) -\r\n	281-444-9888 (Signature Nails) -\r\n	281-858-5999 (Lush & Co.)', '2016-04-13 00:00:00', ''),
	(25, 30, 2, 'CẦN THỢ NAIL!!!', 'Cần nhiều thợ nails biết làm tay chân nước, bột 2 màu, biết wax, gắn lông nheo bao lương $800/6 ngày và thợ tay chân nước biết wax và làm shellac bao $500/6 ngày. Tiệm đóng cửa ngày chủ nhật. ', '713-815-1833', '2016-04-13 00:00:00', ''),
	(26, 31, 2, 'Bao $800 Cần Thợ Bột', 'Tiệm vùng Pearland Pkwy và Beltway 8. Cần thợ biết làm bột pink and white và tay chân nước. Cần người full time. Giá cao, tip hậu. Cần biết tiếng anh. Người làm rất vui vẻ.\r\n	We are looking for experience nail techs! Powder tech with design skill is a plus. Looking for full-time. Get Pay Every WEEK!\r\n	Dazzle Nails and Spa 10555 Pearland Pkwy, Houston, TX, 77089', 'Call or text Cookie: 832-814-8453\r\n	Call or Text Cookie: 832-814-8453', '2016-04-27 00:00:00', ''),
	(27, 32, 2, 'Cần thơ nails Nam nữ', 'Tiệm khu mễ trên đường bellaire and chimney rock .Cần thợ nails biết làm bột,chân tay nước ,bao lương $700 tuần. Hoặc ăn chia', '(713) 269-0414 (Gọi Gặp: Tammy)', '2016-04-11 00:00:00', ''),
	(28, 33, 2, 'Cần thợ nails gấp...gấp!', 'Cần thợ bột có kinh nghiệm pink & white, almond, coffin shape( có bằng facial và biết eyebrow threating , eyelash càng tốt) giỏi về shellac. Nói khá tiếng Anh. Khu trắng, tip cao.Bao lương thợ bột 700-800/tuần, chân tay nước 600-700/tuần', 'My 832-406-8280', '2016-04-09 00:00:00', ''),
	(29, 34, 2, 'CẦN BÁN NHIỀU GHẾ SPA.', 'Đang cần bán gấp furniture Nail salon nhiều đèn trang trí ..!! \r\n	16 ghế spa như mới -> $500/cái\r\n	6 bàn nail -> $150/cái\r\n	1 bàn hơ tay -> $250\r\n	1 máy hấp khăn - $150\r\n	1 giường wax -> $80\r\n	Nhiều đèn trang trí', '832-660-5580', '2016-04-09 00:00:00', ''),
	(30, 36, 2, 'Cơ Hội Làm Nail Gần Nhà (Houston)', 'Cơ hội làm việc gần nhà với chị em bận việc gia đình. Cần thợ Bôt.Tiệm cách chợ Thắng Hưng và Hồng Kông 3 khoảng 10 phút lái xe. Làm việc từ 9 giờ sáng tới 7 giờ chiều, Nơi làm việc thoải mái vui vẻ. Làm từ thứ hai tới thứ bảy, bao lương $700. 50 phần trăm tiền mặt và tiền check. Ngày Chúa Nhật đóng cửa.', 'chị Hương số:281-716-2854', '2016-04-07 00:00:00', ''),
	(31, 38, 2, 'Cell: 832-444-2654 - CẦN THỢ NAIL!!!', 'Cần thợ nail full time or part time biết làm bột, chân tay nước và wax. Bao lương $600-$800 & up, hơn ăn chia. Tiệm cách Hong Kong III 10 phút, đóng cửa Chủ Nhật.\r\n	Xin gọi: Kathy ', 'Work: 281-873-6355 or\r\n	Cell: 832-444-2654.', '2016-03-29 00:00:00', ''),
	(32, 39, 2, 'CẦN THỢ NAIL GẤP GẤP !!!', 'Tiệm vung south 45 cần thợ bột và tay chân nước nam or nữ làm full-time và part-time bao lương $750 & up hơn sẽ chia 6/4, excellent tips, khách lich sự, việc làm thoải mái, mấy chị em làm việc không dành tua, tiệm góc đường Pearland Parkway và Beltway 8, trong khu Tmobile/Flaming Wok, cách chợ HK2 và nhà thờ Thánh Tử Đạo 10 phút. ', '281-501-0261 or : 281-636-1516', '2016-04-27 00:00:00', ''),
	(33, 41, 2, 'CẦN THỢ NAIL GẤP!!!', 'Tiệm nail vùng North 59 & Tidwell, gần HK 3 & 4 (cách 30 phút), làng Thái Xuân 15 phút.\r\n	Cần gấp thợ bột và thợ chân tay nước (nam/nữ), bao lương quanh năm $800 trở lên tùy theo kinh nghiệm.', 'Vicky (713)922-8018', '2016-04-28 00:00:00', '');
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;


-- Dumping structure for table reselleradmin_nailviec.jobstatus
DROP TABLE IF EXISTS `jobstatus`;
CREATE TABLE IF NOT EXISTS `jobstatus` (
  `Id` int(11) NOT NULL,
  `Name` text NOT NULL,
  `IsShow` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table reselleradmin_nailviec.jobstatus: 4 rows
DELETE FROM `jobstatus`;
/*!40000 ALTER TABLE `jobstatus` DISABLE KEYS */;
INSERT INTO `jobstatus` (`Id`, `Name`, `IsShow`) VALUES
	(1, 'Hot', 0),
	(2, 'New', 0),
	(3, 'Inprocess', 0),
	(4, 'Removed', 0);
/*!40000 ALTER TABLE `jobstatus` ENABLE KEYS */;


-- Dumping structure for table reselleradmin_nailviec.nailshopowner
DROP TABLE IF EXISTS `nailshopowner`;
CREATE TABLE IF NOT EXISTS `nailshopowner` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FullName` text NOT NULL,
  `Phone` text NOT NULL,
  `Email` text NOT NULL,
  `Password` text NOT NULL,
  `ShopOwnerStatusId` int(11) NOT NULL COMMENT '0: New, 1: Enable, 2: Disable',
  `DateUpdated` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- Dumping data for table reselleradmin_nailviec.nailshopowner: 24 rows
DELETE FROM `nailshopowner`;
/*!40000 ALTER TABLE `nailshopowner` DISABLE KEYS */;
INSERT INTO `nailshopowner` (`Id`, `FullName`, `Phone`, `Email`, `Password`, `ShopOwnerStatusId`, `DateUpdated`) VALUES
	(1, 'sang 1', '0923546786', 'sangnew2015@gmail.com', 'Aa123456', 1, NULL),
	(2, 'Sang 1Aa', '09874110', 'sang1a@gmail.com', '', 1, '2016-10-29 11:07:43'),
	(3, 'Sang 2', '0987422', 'sang2@gmail.com', '222', 1, NULL),
	(4, 'Sang 3', '0987433', 'sang3@gmail.com', '333', 1, NULL),
	(5, 'Sang 4', '0987444', 'sang4@gmail.com', '444', 1, NULL),
	(6, 'Sang 5', '0987455', 'sang5@gmail.com', '555', 1, NULL),
	(7, 'Test 1', 'phone 1', 'sangnew2015@gmail.com', '', 1, NULL),
	(8, 'dfdf111', 'dfsdf111', 'sangnew2015@gmail.com', '1111111', 1, NULL),
	(9, 'Temp 1', '001 714', 'sang_new2015@gmail.com', '', 1, '2016-10-29 10:38:06'),
	(10, 'minh sang1a', '0919239081', 'sangnew2015@gmail.com', '', 1, '2016-10-29 00:00:00'),
	(11, '', '', '', '', 1, NULL),
	(12, '', '', '', '', 1, NULL),
	(13, 'aaa11_a', 'aaa', 'sangnew2015@gmail.com', '', 2, '2016-11-01 11:07:37'),
	(14, 'aaa', 'aaa', 'sangnew2015@gmail.com', '11111', 1, NULL),
	(15, 'bbb', 'bbb', 'sangnew2015@gmail.com', '', 1, NULL),
	(16, 'bbb', 'bbb', 'sangnew2015@gmail.com', '', 1, NULL),
	(17, 'sss', 'sss', 'sangnew2015@gmail.com', '', 1, NULL),
	(18, 'sdfasdsd', 'sdasdsad', 'sdsd@sdsd.xc', '', 1, NULL),
	(19, 'TEmp 1', '0909234567', 'temp1@gmail.com', 'Aa123456', 1, '2016-11-01 08:27:21'),
	(20, 'TEmp 2', '09098765432', 'temp2@gmail.com', 'Aa123', 1, '2016-11-01 08:28:50'),
	(21, 'Tem 3', '0909234567', 'temp3@gmail.com', '', 5, '2016-11-01 11:08:01'),
	(22, 'Temp 4', '0908345678', 'temp4@gmail.com', '', 3, '2016-11-01 11:08:26'),
	(23, 'Temp 5', '0908324567', 'temp5@gmail.com', '', 1, '2016-11-01 11:09:14'),
	(24, 'Temp 6', '0907345123', 'temp6@gmail.com', '', 1, '2016-11-01 11:12:59');
/*!40000 ALTER TABLE `nailshopowner` ENABLE KEYS */;


-- Dumping structure for table reselleradmin_nailviec.nailshops
DROP TABLE IF EXISTS `nailshops`;
CREATE TABLE IF NOT EXISTS `nailshops` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ShopName` text NOT NULL,
  `AreaId` int(11) NOT NULL,
  `ShopAddress` text NOT NULL,
  `Latitude` double NOT NULL,
  `Longtitude` double NOT NULL,
  `ShopStatusId` int(11) NOT NULL,
  `ShopOwnerId` int(11) NOT NULL,
  `DateUpdated` datetime NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

-- Dumping data for table reselleradmin_nailviec.nailshops: 41 rows
DELETE FROM `nailshops`;
/*!40000 ALTER TABLE `nailshops` DISABLE KEYS */;
INSERT INTO `nailshops` (`Id`, `ShopName`, `AreaId`, `ShopAddress`, `Latitude`, `Longtitude`, `ShopStatusId`, `ShopOwnerId`, `DateUpdated`) VALUES
	(1, 'Vogue Nails', 1, '16925 El Camino Real Houston, TX - 77058', 29.553138, -95.118104, 1, 1, '0000-00-00 00:00:00'),
	(2, 'Pretty Nails & Spa', 1, '1333 Old Spanish Trl Ste B Houston, TX - 77054', 29.694247, -95.412177, 1, 2, '2016-06-08 00:00:00'),
	(3, 'Royal Nails & Spa', 1, '8505 S Main St Ste 300 Houston, TX - 77025', 29.690913, -95.415827, 1, 3, '0000-00-00 00:00:00'),
	(4, 'Q Nails & Spa', 1, '2825 S Kirkwood Rd Houston, TX - 77082', 29.732266, -95.588779, 1, 4, '0000-00-00 00:00:00'),
	(5, 'Diva Nails & Spa', 1, '19708 N.w Freeway Suite 600 Houston, TX - 77065', 29.915546, -95.612382, 1, 5, '2016-06-06 00:00:00'),
	(6, 'Lily Nails By Sonny', 1, '9150 S Main St Houston, TX - 77025', 29.686008, -95.422029, 1, 0, '0000-00-00 00:00:00'),
	(7, 'Fabulous Nails', 1, '11300 West Rd Houston, TX - 77065', 29.908672, -95.59162, 1, 0, '2016-06-01 00:00:00'),
	(8, 'Lux Nails Spa', 1, '9668 Westheimer Rd, Suite 400 Houston, TX - 77063', 29.967265, -95.692769, 1, 0, '0000-00-00 00:00:00'),
	(9, 'Pink Nail Lounge', 1, '1460 Eldridge Pkwy Houston, TX - 77077', 29.759116, -95.625988, 1, 0, '0000-00-00 00:00:00'),
	(10, 'TLC Nails & Spa', 1, '10904 Scarsdale Blvd Suite 285 Houston, TX - 77089', 29.586275, -95.21101, 1, 0, '0000-00-00 00:00:00'),
	(11, 'Kayla Nails', 1, '802 Rankin Rd Ste A3 Houston, TX - 77073', 29.965608, -95.398302, 1, 0, '0000-00-00 00:00:00'),
	(12, 'Vintage Nails', 1, '10850 Louetta Rd Ste 400 Houston, TX - 77070', 29.997791, -95.575748, 1, 0, '0000-00-00 00:00:00'),
	(13, 'Regal Nails', 1, '10919 Louetta Rd Ste 106 Houston, TX - 77070', 29.995369, -95.576223, 1, 0, '0000-00-00 00:00:00'),
	(14, 'Heavenly Lashes Nail Spa', 1, '2007 W Alabama St Ste C Houston, TX - 77098', 29.738225, -95.408451, 1, 0, '0000-00-00 00:00:00'),
	(15, 'Lexor Store', 1, '11209 Bellaire Blvd (Inside Hong Kong 4 Mall) Houston, TX - 77072', 29.701814, -95.577366, 1, 0, '0000-00-00 00:00:00'),
	(16, 'Dk Nail', 1, '8615 Tidwell F Houston, TX - 77028', 29.850429, -95.264439, 1, 0, '0000-00-00 00:00:00'),
	(17, 'Soho Nail Louge', 1, '9738 Katy Fwy Houston, TX - 77055', 29.786263, -95.533688, 1, 0, '0000-00-00 00:00:00'),
	(18, 'Texan Nails', 1, '6830 E Sam Houston Pk N Houston, TX - 77049', 29.867452, -95.56342, 1, 0, '0000-00-00 00:00:00'),
	(19, 'Herbal Nails And Spa', 1, '11510 Space Center Blvd Ste C Houston, TX - 77059', 29.624504, -95.140604, 1, 0, '0000-00-00 00:00:00'),
	(20, 'Regal Nails', 1, '3506 Highway 6 S Houston, TX - 77082', 29.721232, -95.64723, 1, 0, '0000-00-00 00:00:00'),
	(21, '9 Hair-nails & Spa', 1, '8906 Airport Blvd St Ste C Houston, TX - 77061', 29.573457, -95.085218, 1, 0, '0000-00-00 00:00:00'),
	(22, 'Eternity Nails', 1, '3821 Bellaire Blvd Houston, TX - 77025', 29.705433, -95.4399867, 1, 0, '0000-00-00 00:00:00'),
	(23, 'Nails Couture', 1, '10511 Jones Rd Houston, TX - 77065', 29.925639, -95.585352, 1, 0, '0000-00-00 00:00:00'),
	(24, 'Season’s Of Nails & Skin Care', 1, '9025 Westheimer Rd\r\nHouston, TX - 77063', 29.736903, -95.523514, 1, 0, '0000-00-00 00:00:00'),
	(25, 'Borgata Nail Salon', 1, '2626 Yale St Houston, TX - 77008', 29.811052, -95.398839, 1, 0, '0000-00-00 00:00:00'),
	(26, 'Resort Nail and Spa', 1, '2520 Rice Blvd Houston, TX - 77005', 29.717545, -95.41713, 1, 0, '0000-00-00 00:00:00'),
	(27, 'Cabana Day Spa', 1, '1031 Blalock Rd Houston, TX - 77055', 29.7864, -95.52166, 1, 0, '0000-00-00 00:00:00'),
	(28, 'Sunshine Nails', 1, '15754 Fm 529 Rd Ste 400 Houston, TX - 77095', 29.879883, -95.647972, 1, 0, '0000-00-00 00:00:00'),
	(29, 'Signature Nail Spa', 1, '6915 Fm 1960 West Houston, TX - 77069', 29.96917, -95.532129, 1, 0, '0000-00-00 00:00:00'),
	(30, 'Adagio\'s Nails & Spa', 1, '2200 Spears Rd Houston, TX - 77067', 29.965017, -95.45287, 1, 0, '0000-00-00 00:00:00'),
	(31, 'Dazzle Nails And Spa', 1, '10555 Pearland Pkwy Houston, TX - 77089', 29.597803, -95.265227, 1, 0, '0000-00-00 00:00:00'),
	(32, 'Cn Nail', 1, '5800 Bellaire Boulevard Houston, TX - 77081', 29.706638, -95.483934, 1, 0, '0000-00-00 00:00:00'),
	(33, 'VIP Nails Vintage Spa', 1, '10220 Louetta Rd Ste 500 Houston, TX - 77070', 29.998961, -95.564312, 1, 0, '0000-00-00 00:00:00'),
	(34, 'Lux Nails & Spa', 1, '9668 Westheimer Rd, Suite 400 Houston, TX - 77063', 29.967301, -95.692734, 1, 0, '0000-00-00 00:00:00'),
	(35, 'Vip Nails Spa', 1, '12344 Gulf Fwy Houston, TX - 77034', 29.618486, -95.21924, 1, 0, '0000-00-00 00:00:00'),
	(36, 'Rose Nails', 1, '734 Greens Rd Houston, TX - 77060', 29.950506, -95.398161, 1, 0, '0000-00-00 00:00:00'),
	(37, 'Nails 45south', 1, '15327 Gulf Fwy Houston Houston, TX - 77034', 29.698888, -95.285423, 1, 0, '0000-00-00 00:00:00'),
	(38, 'Cindys Nails', 1, '210 W Greens Rd Ste F Houston, TX - 77067', 29.950026, -95.419467, 1, 0, '0000-00-00 00:00:00'),
	(39, 'Palace Nail Spa', 1, '8498 S Sam Houston Pkwy E Houston, TX - 77075', 29.598671, -95.266957, 1, 0, '0000-00-00 00:00:00'),
	(40, 'Airjet Spa', 1, '550 Heights Blvd Ste A Houston, TX - 77007', 29.781159, -95.397041, 1, 0, '0000-00-00 00:00:00'),
	(41, 'Nails By D&K', 1, '8615 Tidwell, Suite F Houston, TX - 77028', 29.849632, -95.271009, 1, 0, '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `nailshops` ENABLE KEYS */;


-- Dumping structure for table reselleradmin_nailviec.shopownerstatus
DROP TABLE IF EXISTS `shopownerstatus`;
CREATE TABLE IF NOT EXISTS `shopownerstatus` (
  `Id` int(11) NOT NULL,
  `Name` text NOT NULL,
  `IsShow` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table reselleradmin_nailviec.shopownerstatus: 5 rows
DELETE FROM `shopownerstatus`;
/*!40000 ALTER TABLE `shopownerstatus` DISABLE KEYS */;
INSERT INTO `shopownerstatus` (`Id`, `Name`, `IsShow`) VALUES
	(1, 'New', 0),
	(2, 'Activated', 0),
	(3, 'Disabled', 0),
	(4, 'Replace Owner', 0),
	(5, 'Closed', 0);
/*!40000 ALTER TABLE `shopownerstatus` ENABLE KEYS */;


-- Dumping structure for table reselleradmin_nailviec.shopownerstatushistory
DROP TABLE IF EXISTS `shopownerstatushistory`;
CREATE TABLE IF NOT EXISTS `shopownerstatushistory` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ShopOwnerStatusId` int(11) NOT NULL,
  `DateUpdated` datetime NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table reselleradmin_nailviec.shopownerstatushistory: 0 rows
DELETE FROM `shopownerstatushistory`;
/*!40000 ALTER TABLE `shopownerstatushistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopownerstatushistory` ENABLE KEYS */;


-- Dumping structure for table reselleradmin_nailviec.shopstatus
DROP TABLE IF EXISTS `shopstatus`;
CREATE TABLE IF NOT EXISTS `shopstatus` (
  `Id` int(11) NOT NULL,
  `Name` text NOT NULL,
  `IsShow` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table reselleradmin_nailviec.shopstatus: ~3 rows (approximately)
DELETE FROM `shopstatus`;
/*!40000 ALTER TABLE `shopstatus` DISABLE KEYS */;
INSERT INTO `shopstatus` (`Id`, `Name`, `IsShow`) VALUES
	(1, 'New', 1),
	(2, 'Enable', 1),
	(3, 'Disable', 1);
/*!40000 ALTER TABLE `shopstatus` ENABLE KEYS */;


-- Dumping structure for table reselleradmin_nailviec.states
DROP TABLE IF EXISTS `states`;
CREATE TABLE IF NOT EXISTS `states` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` text NOT NULL,
  `TotalShops` int(11) NOT NULL,
  `TotalJobs` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

-- Dumping data for table reselleradmin_nailviec.states: 51 rows
DELETE FROM `states`;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` (`Id`, `Name`, `TotalShops`, `TotalJobs`) VALUES
	(1, 'Alaska', 0, 0),
	(2, 'Alabama', 0, 0),
	(3, 'Arkansas', 0, 0),
	(4, 'Arizona', 0, 0),
	(5, 'California', 0, 0),
	(6, 'Colorado', 0, 0),
	(7, 'Connecticut', 0, 0),
	(8, 'Washington,DC', 0, 0),
	(9, 'Delaware', 0, 0),
	(10, 'Florida', 0, 0),
	(11, 'Georgia', 0, 0),
	(12, 'Hawaii', 0, 0),
	(13, 'Iowa', 0, 0),
	(14, 'Idaho', 0, 0),
	(15, 'Illinois', 0, 0),
	(16, 'Indiana', 0, 0),
	(17, 'Kansas', 0, 0),
	(18, 'Kentucky', 0, 0),
	(19, 'Louisiana', 0, 0),
	(20, 'Massachusetts', 0, 0),
	(21, 'Maryland', 0, 0),
	(22, 'Maine', 0, 0),
	(23, 'Michigan', 0, 0),
	(24, 'Minnesota', 0, 0),
	(25, 'Missouri', 0, 0),
	(26, 'Mississippi', 0, 0),
	(27, 'Montana', 0, 0),
	(28, 'North Carolina', 0, 0),
	(29, 'North Dakota', 0, 0),
	(30, 'Nebraska', 0, 0),
	(31, 'New Hampshire', 0, 0),
	(32, 'New Jersey', 0, 0),
	(33, 'New Mexico', 0, 0),
	(34, 'Nevada', 0, 0),
	(35, 'New York', 0, 0),
	(36, 'Ohio', 0, 0),
	(37, 'Oklahoma', 0, 0),
	(38, 'Oregon', 0, 0),
	(39, 'Pennsylvania', 0, 0),
	(40, 'Rhode Island', 0, 0),
	(41, 'South Carolina', 0, 0),
	(42, 'South Dakota', 0, 0),
	(43, 'Tennessee', 0, 0),
	(44, 'Texas', 0, 0),
	(45, 'Utah', 0, 0),
	(46, 'Virginia', 0, 0),
	(47, 'Vermont', 0, 0),
	(48, 'Washington', 0, 0),
	(49, 'Wisconsin', 0, 0),
	(50, 'West Virginia', 0, 0),
	(51, 'Wyoming', 0, 0);
/*!40000 ALTER TABLE `states` ENABLE KEYS */;


-- Dumping structure for table reselleradmin_nailviec.traceversion
DROP TABLE IF EXISTS `traceversion`;
CREATE TABLE IF NOT EXISTS `traceversion` (
  `Id` int(11) NOT NULL,
  `Name` text NOT NULL,
  `DateUpdated` datetime NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- Dumping data for table reselleradmin_nailviec.traceversion: 8 rows
DELETE FROM `traceversion`;
/*!40000 ALTER TABLE `traceversion` DISABLE KEYS */;
INSERT INTO `traceversion` (`Id`, `Name`, `DateUpdated`) VALUES
	(1, 'Areas', '2016-05-04 12:00:00'),
	(2, 'NailShopOwner', '2016-05-04 12:00:00'),
	(3, 'NailShops', '2016-05-04 12:00:00'),
	(4, 'NewsStatus', '2016-05-04 12:00:00'),
	(5, 'PostedNews', '2016-05-04 12:00:00'),
	(6, 'ShopOwnerStatus', '2016-05-04 12:00:00'),
	(7, 'ShowOwnerStatusHistory', '2016-05-04 12:00:00'),
	(8, 'States', '2016-05-04 12:00:00');
/*!40000 ALTER TABLE `traceversion` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
