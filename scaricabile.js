
// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

// part 1
function searchJobs(title, location) {
  // function body
  // method, this is a function call to toLowerCase()
  const searchTermTitle = title.toLowerCase()
  const searchTermLocation = location.toLowerCase()

  const results = jobs.filter(
    (job) => {
      const jobTitle = job.title.toLocaleLowerCase()
      const jobLocation = job.location.toLocaleLowerCase()

    return (
      jobTitle.includes(searchTermTitle) && jobLocation.includes(searchTermLocation)
    )
    }
  );
  // objects 
  // key:value
  console.log("the type of it is: " + results.jobTitle)
  // length is a property already defined
  return {
    result: results,
    count: results.length
  }

}

// part 2
document.addEventListener('DOMContentLoaded', () =>{
  const titleInput = document.getElementById("jobTitle")
  const locationInput = document.getElementById("jobLocation")
  const searchButton = document.getElementById("searchButton")
  const resultContainer = document.getElementById("resultContainer")

  searchButton.addEventListener('click', ()=>{
    const title = titleInput.value 
    const location = locationInput.value 
    const searchResults = searchJobs(title, location)

    // set to an empty string because we want to clear the previous results whenever a person search something
    resultContainer.innerHTML = ''
    if (searchResults.count > 0){
      const ul = document.createElement('ul')

      searchResults.result.forEach( 
        (job) => {
          const li = document.createElement('li')
          // template literals
          li.textContent = `Title of the job: ${job.title}, Location: ${job.location}`;
          ul.appendChild(li)
        }
        )
        resultContainer.appendChild(ul)
    }
    else {
      resultContainer.textContent = "NO matching Jobs found"
    }
  })

})