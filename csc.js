// Country lists
var countries = new Array();
countries[''] = new Array('India');

// State lists
var states = new Array();
states[''] = new Array();
states['India'] = new Array('Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'New Delhi', 'Orissa', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal');

// City lists
var cities = new Array();
cities[''] = new Array();
cities['India'] = new Array();
cities['India']['Andaman and Nicobar Islands'] = new Array('Bombuflat', 'Garacharma', 'Port Blair', 'Rangat');
cities['India']['Andhra Pradesh'] = new Array('Adoni', 'Amaravati', 'Anantapur', 'Bhimavaram', 'Chilakaluripet', 'Chittoor', 'Dharmavaram', 'Eluru', 'Gudivada', 'Guntakal', 'Guntur', 'Hindupur', 'Kadapa', 'Kakinada', 'Kurnool', 'Machilipatnam', 'Madanapalle', 'Nandyal', 'Narasaraopet', 'Nellore', 'Ongole', 'Proddatur', 'Rajahmundry', 'Srikakulam', 'Tadepalligudem', 'Tadpatri', 'Tenali', 'Tirupati', 'Vijayawada', 'Visakhapatnam', 'Vizianagaram');
cities['India']['Arunachal Pradesh'] = new Array('Anjaw', 'Changlang', 'Dibang Valley', 'East Kameng', 'East Siang', 'Kurung Kumey', 'Lohit', 'Lower Dibang Valley', 'Lower Subansiri', 'Papumpare', 'Tawang', 'Tirap', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang');
cities['India']['Assam'] = new Array('Barpeta', 'Bongaigaon', 'Cachar', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'Tinsukia', 'Udalguri');
cities['India']['Bihar'] = new Array('Arrah', 'Aurangabad', 'Bagaha', 'Begusarai', 'Bettiah', 'Bhagalpur', 'Bihar Sharif', 'Buxar', 'Chhapra', 'Darbhanga', 'Dehri', 'Gaya', 'Hajipur', 'Jamalpur', 'Jehanabad', 'Katihar', 'Kishanganj', 'Motihari', 'Munger', 'Muzaffarpur', 'Nawada', 'Patna', 'Purnia', 'Saharsa', 'Sasaram', 'Sitamarhi', 'Siwan');
cities['India']['Chandigarh'] = new Array('Chandigarh');
cities['India']['Chhattisgarh'] = new Array('Ambikapur', 'Bilaspur', 'Chirmiri', 'Dhamtari', 'Durg - Bhilai', 'Jagdalpur', 'Korba', 'Mahasamund', 'Pakhanjore', 'Raigarh', 'Raipur', 'Rajnandgaon');
cities['India']['Dadra and Nagar Haveli'] = new Array('Amli', 'Dadra', 'Masat', 'Naroli', 'Rakholi', 'Samarvarni', 'Silvassa');
cities['India']['Daman and Diu'] = new Array('Daman', 'Diu');
cities['India']['Goa'] = new Array('Panaji', 'Calangute', 'Vasco da Gama', 'Margao', 'Mapusa');
cities['India']['Gujarat'] = new Array('Abdasa', 'Ahmedabad', 'Alang-Sosiya', 'Amirgadh', 'Amod', 'Amreli', 'Anand', 'Anjar', 'Anklav', 'Anklesvar', 'Babra', 'Bagasara', 'Balasinor', 'Banas Kantha', 'Bansda', 'Bantwa', 'Bardoli', 'Bareja', 'Barwala', 'Bavla', 'Bayad', 'Becharaji', 'Bhabhar', 'Bhachau', 'Bhanvad', 'Bharuch', 'Bhavnagar', 'Bhayavadar', 'Bhesan', 'Bhiloda', 'Bhuj', 'Bilimora', 'Boriavi', 'Borsad', 'Botad', 'Chaklasi', 'Chalala', 'Chanasma', 'Chhatral', 'Chhaya', 'Chhota Udaipur', 'Chikhli', 'Chorasi', 'Chorvad', 'Chotila', 'Chuda', 'Dabhoi', 'Dahod', 'Dakor', 'Damnagar', 'Danta', 'Dantiwada', 'Dasada', 'Daskroi', 'Dediapada', 'Deesa', 'Dehgam', 'Deodar', 'Detroj-Rampura', 'Devgadbaria', 'Dhandhuka', 'Dhanera', 'Dhanpur', 'Dhansura', 'Dharampur', 'Dhari', 'Dholka', 'Dhoraji', 'Dhrangadhra', 'Dhrol', 'Dwarka', 'Fatepura', 'Gadhada', 'Gandevi', 'Gandhidham', 'Gandhinagar', 'Gariadhar', 'Ghogha', 'Ghoghamba', 'Godhra', 'Gondal', 'Hajira', 'Halol', 'Halvad', 'Hansot', 'Harij', 'Himatnagar', 'Idar', 'Jafrabad', 'Jalalpore', 'Jambughoda', 'Jambusar', 'Jamjodhpur', 'Jamkandorna', 'Jamnagar', 'Jasdan', 'Jetpur Navagadh', 'Jetpur Pavi', 'Jhagadia', 'Jhalod', 'Jodiya', 'Junagadh', 'Kachchh', 'Kadana', 'Kadi', 'Kalavad', 'Kalol', 'Kalyanpur', 'Kamrej', 'Kanjari', 'Kankrej', 'Kansad', 'Kapadvanj', 'Kaprada', 'Karamsad', 'Karjan', 'Kathlal', 'Kavant', 'Keshod', 'Khambha', 'Khambhalia', 'Khambhat', 'Khanpur', 'Kheda', 'Khedbrahma', 'Kheralu', 'Kodinar', 'Kotda Sangani', 'Kunkavav Vadia', 'Kutiyana', 'Lakhpat', 'Lakhtar', 'Lalpur', 'Lathi', 'Lilia', 'Limbdi', 'Limkheda', 'Lodhika', 'Lunawada', 'Magdalla', 'Mahudha', 'Mahuva', 'Malia', 'Maliya', 'Malpur', 'Manavadar', 'Mandal', 'Mandvi', 'Mangrol', 'Mansa', 'Matar', 'Meghraj', 'Mehmedabad', 'Mehsana', 'Mendarda', 'Modasa', 'Morbi', 'Morwa (Hadaf)', 'Muli', 'Mundra', 'Nadiad', 'Nakhatrana', 'Nandesari', 'Nandod', 'Narmad', 'Navsari', 'Nizar', 'Ode', 'Okha', 'Okhamandal', 'Olpad', 'Paddhari', 'Padra', 'Palanpur', 'Palitana', 'Palsana', 'Panch Mahals', 'Panoli', 'Pardi', 'Patan', 'Patdi', 'Petlad', 'Porbandar', 'Por-Ramangamdi', 'Prantij', 'Radhanpur', 'Rajkot', 'Rajpipla', 'Rajula', 'Ranavav', 'Ranpur', 'Rapar', 'Raval', 'Sabar Kantha', 'Sachin', 'Sagbara', 'Salaya', 'Sami', 'Sanand', 'Sankheda', 'Santalpur', 'Santrampur', 'Saputara', 'Sarigam', 'Satlasana', 'Savar Kundla', 'Savarkundla', 'Savli', 'Sayla', 'Shehera', 'Sidhpur', 'Sihor', 'Sikka', 'Sinor', 'Sojitra', 'Songadh', 'Surat', 'Surendranagar', 'Sutrapada', 'Talaja', 'Talala', 'Talod', 'Tankara', 'Tapi', 'Tarapur', 'Tarsadi', 'Thangadh', 'Thara', 'Tharad', 'Thasra', 'The Dangs', 'Tilakwada', 'Uchchhal', 'Umarpada', 'Umbergaon', 'Umrala', 'Umreth', 'Una', 'Unjha', 'Upleta', 'Vadali', 'Vadgam', 'Vadnagar', 'Vadodara', 'Vaghodia', 'Vagra', 'Valia', 'Vallabh Vidyanagar', 'Vallabhipur', 'Valod', 'Valsad', 'Vanthali', 'Vapi', 'Vasna', 'Vav', 'Veraval', 'Vijalpor', 'Vijapur', 'Vijaynagar', 'Viramgam', 'Virpur', 'Visavadar', 'Visnagar', 'Vithal Udyognagar', 'Vyara', 'Wadhwan', 'Wankaner');
cities['India']['Haryana'] = new Array('Ambala', 'Bhiwani', 'Faridabad', 'Fatehabad', 'Gurgaon', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Mewat', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamuna Nagar');
cities['India']['Himachal Pradesh'] = new Array('Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul and Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una');
cities['India']['Jammu and Kashmir'] = new Array('Anantnag', 'Jammu', 'Srinagar');
cities['India']['Jharkhand'] = new Array('Bokaro Steel City', 'Chirkunda', 'Deoghar', 'Dhanbad', 'Giridih', 'Hazaribagh', 'Jamshedpur', 'Medininagar', 'Phusro', 'Ramgarh', 'Ranchi');
cities['India']['Karnataka'] = new Array('Bagalkot', 'Bangalore', 'Bangalore Rural', 'Belgaum', 'Bellary', 'Bidar', 'Bijapur', 'Chamarajanagar', 'Chikkaballapura', 'Chikmagalur', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Gulbarga', 'Hassan', 'Haveri', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysore', 'Raichur', 'Ramanagara', 'Shimoga', 'Tumkur', 'Udupi', 'Uttara Kannada', 'Yadgir');
cities['India']['Kerala'] = new Array('Alappuzha', 'Attingal', 'Beypore', 'Chalakkudy', 'Chavakkad', 'Cherthal', 'Kalamassery', 'Kanhangad', 'Kannur', 'Kasaragod', 'Kattappana', 'Kayamkulam', 'Kochi', 'Kollam', 'Kottakkal', 'Kottayam', 'Koyilandy', 'Kozhikode', 'Kunnamkulam', 'Malappuram', 'Mananthavady', 'Manjeri', 'Manjeshwaram', 'Maradu', 'Mattanur', 'Neyyattinkara', 'Nilambur', 'Nileshwaram', 'Ottappalam', 'Palakkad', 'Pandalam', 'Paravur', 'Pathanamthitta', 'Payyanur', 'Perinthalmanna', 'Ponnani', 'Punalur', 'Ramanattukara', 'Shornur', 'Taliparamba', 'Thalassery', 'Thiruvananthapuram', 'Thodupuzha', 'Thrissur', 'Tirur', 'Tirurangadi', 'Tiruvalla', 'Uppala', 'Vadakara', 'Varkala');
cities['India']['Lakshadweep'] = new Array('Amini', 'Andrott', 'Kadmat', 'Kalpeni', 'Kavaratti', 'Minicoy');
cities['India']['Madhya Pradesh'] = new Array('Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Guna', 'Gwalior', 'Hoshangabad', 'Indore', 'Itarsi', 'Jabalpur', 'Khandwa', 'Khargone', 'Mandsaur', 'Morena', 'Murwara', 'Katni', 'Nagda', 'Neemuch', 'Pithampur', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shivpuri', 'Singrauli', 'Ujjain', 'Vidisha');
cities['India']['Maharashtra'] = new Array('Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Bhiwandi', 'Chandrapur', 'Dhule', 'Jalgaon', 'Kalyan-Dombivali', 'Kolhapur', 'Latur', 'Malegaon', 'Mumbai', 'Nagpur', 'Nanded', 'Nashik', 'Navi Mumbai', 'Parbhani', 'Pimpri Chinchwad', 'Pune', 'Sangli', 'Solapur', 'Thane', 'Vasai-Virar');
cities['India']['Manipur'] = new Array('Bishnupur', 'Churachandpur', 'Chandel', 'Imphal East', 'Senapati', 'Tamenglong', 'Thoubal', 'Ukhrul', 'Imphal West');
cities['India']['Meghalaya'] = new Array('Agartala', 'Aizawl', 'Dhubri', 'Dibrugarh', 'Dimapur', 'Guwahati', 'Imphal', 'Jorhat', 'Kohima', 'Nagaon', 'Shillong', 'Silchar', 'Tezpur', 'Tinsukia');
cities['India']['Mizoram'] = new Array('Aizawl', 'Champhai', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Serchhip', 'Siaha');
cities['India']['Nagaland'] = new Array('Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Peren', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto');
cities['India']['New Delhi'] = new Array('New Delhi');
cities['India']['Orissa'] = new Array('Balangir', 'Baleshwar', 'Bargarh', 'Baudh', 'Bhadrak', 'Cuttack', 'Debagarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghapur', 'Jajapur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangapur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur', 'Sundargarh');
cities['India']['Puducherry'] = new Array('Karaikal', 'Mahe', 'Puducherry', 'Villianur', 'Yanam');
cities['India']['Punjab'] = new Array('Abohar', 'Ajitgarh', 'Amritsar', 'Barnala', 'Batala', 'Bathinda', 'Firozpur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Khanna', 'Ludhiana', 'Malerkotla', 'Moga', 'Muktasar', 'Pathankot', 'Patiala', 'Phagwara', 'Rajpura');
cities['India']['Rajasthan'] = new Array('Ajmer', 'Alwar', 'Beawar', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Churu', 'Dholpur', 'Gangapur City', 'Hanumangarh', 'Hindaun City', 'Jaipur', 'Jodhpur', 'Kishangarh', 'Kota', 'Pali', 'Sawai Madhopur', 'Sikar', 'Tonk', 'Udipur');
cities['India']['Sikkim'] = new Array('Gangtok', 'Gyalshing', 'Jorethang', 'Mangan', 'Namchi', 'Nayabazar', 'Rangpo', 'Singtam', 'Upper Tadong');
cities['India']['Tamil Nadu'] = new Array('Chennai', 'Coimbatore', 'Dindigul', 'Erode', 'Madurai', 'Salem', 'Thanjavur', 'Thoothukkudi', 'Tiruchirappalli', 'Tirunelveli', 'Tiruppur', 'Vellore');
cities['India']['Telangana'] = new Array('Adilabad', 'Hyderabad', 'Karimnagar', 'Khammam', 'Mahbubnagar', 'Miryalaguda', 'Nalgonda', 'Nizamabad', 'Ramagundam', 'Siddipet', 'Suryapet', 'Warangal');
cities['India']['Tripura'] = new Array('Kumarghat', 'Udaipur', 'Unakoti', 'Badharghat', 'Dharmanagar', 'Gakulnagar', 'Jogendranagar', 'Kunjaban', 'Amarpur', 'Sabroom', 'Belonia', 'Kailashahar');
cities['India']['Uttar Pradesh'] = new Array('Agra', 'Akbarpur', 'Aligarh', 'Allahabad', 'Amroha', 'Azamgarh', 'Bahraich', 'Ballia', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandausi', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farrukhabad-cum-Fategarh', 'Fatehpur', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Greater Noida', 'Hapur', 'Hardoi', 'Hathras', 'Jaunpur', 'Jhansi', 'Kanpur', 'Kasganj', 'Khair', 'Khurja', 'Lakhimpur', 'Lalitpur', 'Lucknow', 'Mainpuri', 'Mathura', 'Maunath Bhanjan', 'Meerut', 'Mirzapur-cum-Vindhyachal', 'Modinagar', 'Moradabad', 'Mughalsarai', 'Muzaffarnagar', 'Noida', 'Orai', 'Pilibhit', 'Raebareli', 'Rampur', 'Saharanpur', 'Sahaswan', 'Sambhal', 'Shahjahanpur', 'Shamli', 'Shikohabad', 'Sitapur', 'Sultanpur', 'Tanda', 'Ujhani', 'Unnao', 'Varanasi');
cities['India']['Uttarakhand'] = new Array('Dehradun', 'Haridwar', 'Roorkee', 'Haldwani-cum-Kathgodam', 'Rudrapur', 'Kashipur', 'Rishikesh');
cities['India']['West Bengal'] = new Array('Alipurduar', 'Asansol', 'Baharampur', 'Balurghat', 'Bangaon', 'Bankura', 'Bardhaman', 'Basirhat', 'Chakdaha', 'Cooch Behar', 'Dankuni', 'Darjeeling', 'Dhulian', 'Durgapur', 'Habra', 'Haldia', 'Jalpaiguri', 'Jangipur', 'Kharagpur', 'Kolkata', 'Krishnanagar', 'Malda', 'Medinipur', 'Nabadwip', 'Purulia', 'Raiganj', 'Ranaghat', 'Shantipur', 'Siliguri');

function setCountries() {
	var countryList = countries[''];
	return changeSelect(countryList, countryList);
}

function setStates(country) {
    var stateList = states[country];
	$('#stateProvince').combobox('loadData', changeSelect(stateList, stateList));
}

function setCities(country, state) {
    var cityList = cities[country][state];
    $('#cityVillage').combobox('loadData', changeSelect(cityList, cityList));
}

function changeSelect(newOptions, newValues) {
    var data=[];
	for (var i = 0; i < newOptions.length; i++) {
		data.push({ label: newOptions[i], value: newValues[i] });
	}
	return data;
}

$(function(){
	$('#country').combobox('loadData', setCountries());
});