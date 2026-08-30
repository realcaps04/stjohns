import doctorImages from './doctor-images.json'

export type DoctorIcon = 'heart' | 'stethoscope' | 'specialty'

export type Doctor = {
  id: string
  name: string
  department: string
  url: string
  image?: string
  icon: DoctorIcon
  featured?: boolean
}

function iconForDepartment(department: string): DoctorIcon {
  const value = department.toLowerCase()
  if (
    value.includes('critical') ||
    value.includes('cardio') ||
    value.includes('cardiology') ||
    value.includes('pulmonology') ||
    value.includes('urology')
  ) {
    return 'heart'
  }
  if (
    value.includes('surgery') ||
    value.includes('ent') ||
    value.includes('dental') ||
    value.includes('dermatology') ||
    value.includes('gynaecology') ||
    value.includes('gynecology') ||
    value.includes('obstetric') ||
    value.includes('orthopedic') ||
    value.includes('plastic') ||
    value.includes('maxilofacial') ||
    value.includes('anaesthesia')
  ) {
    return 'specialty'
  }
  return 'stethoscope'
}

function doctor(
  id: string,
  name: string,
  department: string,
  url: string,
  featured = false,
): Doctor {
  const image = doctorImages[id as keyof typeof doctorImages]
  return {
    id,
    name,
    department,
    url,
    image,
    icon: iconForDepartment(department),
    featured,
  }
}

export const doctorsContent = {
  badge: 'Doctors',
  titleLead: 'Meet Our',
  titleRest: 'Medical Experts',
  body: 'Our team of highly skilled and experienced doctors is dedicated to providing exceptional care. Each specialist brings a wealth of expertise and a compassionate approach to ensure you receive the best treatment tailored to your needs.',
  viewAllLabel: 'View All Doctors',
  bookLabel: 'Book Appointment',
  bookHref: '#contact',
  doctors: [
    doctor('varun-v-kumar', 'Dr Varun V Kumar', 'Critical Care', 'https://stjohns.co.in/doctor/dr-varun-v-kumar/'),
    doctor('arjun-antony', 'Dr. Arjun Antony', 'GDMO', 'https://stjohns.co.in/doctor/dr-arjun-antony/'),
    doctor('haris-t-p', 'Dr. Haris T P', 'Neuro Surgery', 'https://stjohns.co.in/doctor/dr-haris-t-p/'),
    doctor('rejoy-mathews', 'Dr. Rejoy Mathews', 'GDMO - Cardiology Department', 'https://stjohns.co.in/doctor/dr-rejoy-mathews-george/'),
    doctor('praveen-p', 'Dr. Praveen P', 'General Surgery', 'https://stjohns.co.in/doctor/dr-praveen-p/'),
    doctor('aswathy-a-r', 'Dr. Aswathy A.R', 'Psychiatry', 'https://stjohns.co.in/doctor/dr-aswathy-a-r/'),
    doctor('apsara', 'Dr. Apsara', 'GDMO', 'https://stjohns.co.in/doctor/dr-apsara/'),
    doctor('aarthi', 'Dr. Aarthi', 'GDMO', 'https://stjohns.co.in/doctor/dr-aarthi/'),
    doctor('latha-g', 'Dr. Latha G', 'Emergency', 'https://stjohns.co.in/doctor/dr-latha-g/'),
    doctor('ansu-annie-tomy', 'Dr. Ansu Annie Tomy', 'Emergency', 'https://stjohns.co.in/doctor/dr-ansu-annie-tomy/'),
    doctor('betty-joseph', 'Dr. Betty Joseph', 'Emergency Department', 'https://stjohns.co.in/doctor/dr-betty-joseph/'),
    doctor('ria-roy', 'Dr. Ria Roy', 'General Medicine', 'https://stjohns.co.in/doctor/dr-ria-roy/'),
    doctor('sebin-sebastian', 'Dr. Sebin Sebastian', 'General Surgery', 'https://stjohns.co.in/doctor/dr-sebin-sebastian/'),
    doctor('neethu-baby', 'Dr. Neethu Baby', 'Dental Surgeon', 'https://stjohns.co.in/doctor/dr-neethu-baby/'),
    doctor('nithina-prasad', 'Dr. NITHINA PRASAD', 'Dental Surgeon', 'https://stjohns.co.in/doctor/dr-nithina-prasad/'),
    doctor('riyamol-jose', 'Dr. Sr. Riyamol Jose SCJG', 'Obstetrics & Gynecology', 'https://stjohns.co.in/doctor/dr-sr-riyamol-jose-scjg/'),
    doctor('muhammed', 'Dr Muhammed', 'Gynaecology', 'https://stjohns.co.in/doctor/dr-muhammed/'),
    doctor('mercylet', 'Dr.Sr. Mercylet', 'Gynaecology', 'https://stjohns.co.in/doctor/dr-sr-mercylet/'),
    doctor('gouri-priya', 'Dr. Gouri Priya', 'Consultant – ENT', 'https://stjohns.co.in/doctor/dr-gouri-priya/'),
    doctor('mosin-b', 'Dr. Mosin B', 'ENT Surgery', 'https://stjohns.co.in/doctor/dr-mosin-b/'),
    doctor('saneesh-m', 'Dr Saneesh M', 'Oral & Maxilofacial Surgery', 'https://stjohns.co.in/doctor/dr-saneesh-m/'),
    doctor('dheeraj-eldho', 'Dr Dheeraj Eldho Paulose', 'Oral & Maxilofacial Surgery', 'https://stjohns.co.in/doctor/dr-dheeraj-eldho-paulose/'),
    doctor('jobin-martin', 'Dr. Jobin Martin', 'Plastic Surgery', 'https://stjohns.co.in/doctor/dr-jobin-martin-sebastian/'),
    doctor('varun-t-k', 'Dr. Varun', 'Pediatrics', 'https://stjohns.co.in/doctor/dr-varun-t-kachiramattam/'),
    doctor('leons-joy', 'Dr Leons Joy', 'Orthopedic Surgery', 'https://stjohns.co.in/doctor/dr-leons-joy/'),
    doctor('pandiprakash', 'Dr Pandiprakash S S', 'Orthopedic Surgery', 'https://stjohns.co.in/doctor/dr-pandiprakash-s-s/'),
    doctor('jolly-varghese', 'Dr Jolly Varghese', 'Orthopedic Surgery', 'https://stjohns.co.in/doctor/dr-jolly-varghese/'),
    doctor('saravana-kumar', 'Dr Saravana Kumar', 'Psychiatry', 'https://stjohns.co.in/doctor/dr-saravana-kumar/'),
    doctor('anju-ann-varghese', 'Dr. Anju Ann Varghese', 'Critical Care', 'https://stjohns.co.in/doctor/dr-anju-ann-varghese/', true),
    doctor('abhinand-s-s', 'Dr. Abhinand S S', 'Urology', 'https://stjohns.co.in/doctor/dr-abhinand-s-s/'),
    doctor('kiran-sivanandan', 'Dr. Kiran Sivanandan', 'Pulmonology', 'https://stjohns.co.in/doctor/dr-kiran-sivanandan/'),
    doctor('lini-b-das', 'Dr. Lini B Das', 'Paediatric', 'https://stjohns.co.in/doctor/dr-lini-b-das/'),
    doctor('sr-elizabeth', 'Dr. Sr. Elizabeth', 'Paediatric', 'https://stjohns.co.in/doctor/dr-sr-elizabeth/'),
    doctor('nithya-devi-k', 'Dr. Nithya Devi K', 'General Medicine', 'https://stjohns.co.in/doctor/dr-nithya-devi-k/', true),
    doctor('pradhosh-mammen', 'Dr Pradhosh Mammen', 'General Medicine', 'https://stjohns.co.in/doctor/dr-pradhosh-mammen/', true),
    doctor('simi-samuel', 'Dr. Simi Samuel', 'General Medicine', 'https://stjohns.co.in/doctor/dr-simi-samuel/', true),
    doctor('m-dharmabai', 'Dr.M.Dharmabai', 'Dermatology', 'https://stjohns.co.in/doctor/dr-m-dharmabai/'),
    doctor('anil-pradeep', 'Dr Anil Pradeep', 'General Medicine', 'https://stjohns.co.in/doctor/dr-anil-pradeep/'),
    doctor('manju-b', 'Dr. Manju B', 'Anaesthesia', 'https://stjohns.co.in/doctor/dr-manju-b/'),
    doctor('ritesh-r', 'Dr Ritesh R', 'Cardiologist', 'https://stjohns.co.in/doctor/dr-ritesh-r/'),
    doctor('jaise-joseph', 'Dr Jaise Joseph', 'Anaesthesia', 'https://stjohns.co.in/doctor/dr-jaise-joseph/'),
  ],
} as const

export const featuredDoctors = doctorsContent.doctors.filter((item) => item.featured)
