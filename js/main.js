// Initial Data
let jobs = [{
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "Not Applied"
},
{
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "Not Applied"
},
{
    id: 3,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "Not Applied"
},
{
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "Not Applied"
},
{
    id: 5,
    company: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "Not Applied"
},
{
    id: 6,
    company: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,00",
    description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "Not Applied"
},
{
    id: 7,
    company: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "Not Applied"
},
{
    id: 8,
    company: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "Not Applied"
}
];

// Current Filter 
let currentFilter = 'all';

// Lucide Icon
function refreshIcons() {
    lucide.createIcons();
}

// UPDATE STATS DASHBOARD 
function updateStats() {
    const total = jobs.length;
    const interview = jobs.filter(j => j.status === 'interview').length;
    const rejected = jobs.filter(j => j.status === 'rejected').length;

    document.getElementById('stat-total').innerText = total;
    document.getElementById('stat-interview').innerText = interview;
    document.getElementById('stat-rejected').innerText = rejected;

    const filteredCount = currentFilter === 'all' ? total : jobs.filter(j => j.status === currentFilter).length;
    document.getElementById('job-count-badge').innerText = `${filteredCount} jobs`;
}

// ----- FILTER HANDLER -----
function setFilter(filter) {
    currentFilter = filter;

    const tabs = ['all', 'interview', 'rejected'];
    tabs.forEach(t => {
        const el = document.getElementById(`tab-${t}`);
        if (t === filter) {
            el.classList.add('bg-blue-600', 'text-white');
            el.classList.remove('text-slate-600', 'hover:bg-slate-200');
        } else {
            el.classList.remove('bg-blue-600', 'text-white');
            el.classList.add('text-slate-600', 'hover:bg-slate-200');
        }
    });


    renderJobs();
}

// UPDATE JOB STATUS 
function updateJobStatus(id, newStatus) {
    const jobIndex = jobs.findIndex(j => j.id === id);
    if (jobIndex !== -1) {
        jobs[jobIndex].status = newStatus;
        updateStats();
        renderJobs();
    }
}

// DELETE JOB 
function deleteJob(id) {
    jobs = jobs.filter(j => j.id !== id);
    updateStats();
    renderJobs();
}

// RENDER JOBS LIST 
function renderJobs() {
    const container = document.getElementById('jobs-container');
    let filteredJobs = jobs;


    // Apply filter if not 'all'
    if (currentFilter !== 'all') {
        filteredJobs = jobs.filter(j => j.status === currentFilter);
    }

    if (filteredJobs.length === 0) {
        container.innerHTML = `
                    <div class="flex flex-col items-center justify-center py-20 bg-white rounded-lg border border-dashed border-slate-300">
                        <div class="bg-blue-50 p-4 rounded-full mb-4">
                            <i data-lucide="file-text" class="w-12 h-12 text-blue-500"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-800">No jobs available</h3>
                        <p class="text-slate-500">Check back soon for new job opportunities</p>
                    </div>
                `;
    } else {
        container.innerHTML = filteredJobs.map(job => `
                    <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md relative group">
                        <!-- Header row: company name and delete button -->
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <h3 class="text-xl font-bold text-slate-800">${job.company}</h3>
                                <p class="text-slate-500 font-medium">${job.position}</p>
                            </div>
                            <button onclick="deleteJob(${job.id})" class="text-slate-300 hover:text-rose-500 transition-colors">
                                <i data-lucide="trash-2" class="w-5 h-5"></i> <!-- Trash icon -->
                            </button>
                        </div>

                        <div class="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400 mb-4">
                            <span class="flex items-center"><i data-lucide="map-pin" class="w-3.5 h-3.5 mr-1"></i> ${job.location}</span>
                            <span class="flex items-center"><i data-lucide="briefcase" class="w-3.5 h-3.5 mr-1"></i> ${job.type}</span>
                            <span class="flex items-center"><i data-lucide="dollar-sign" class="w-3.5 h-3.5 mr-1"></i> ${job.salary}</span>
                        </div>

                        <div class="mb-4">
                            <span class="px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${job.status === 'interview' ? 'bg-emerald-50 text-emerald-600' :
                job.status === 'rejected' ? 'bg-rose-50 text-rose-600' : 'bg-blue-50 text-blue-600'
            }">
                                ${job.status === 'applied' ? 'NOT APPLIED' : job.status}
                            </span>
                        </div>


                        <p class="text-slate-600 text-sm mb-6 leading-relaxed">
                            ${job.description}
                        </p>


                        <div class="flex space-x-3">
                            <button
                                onclick="updateJobStatus(${job.id}, 'interview')"
                                class="px-4 py-2 border rounded-md text-sm font-semibold transition-all ${job.status === 'interview'
                ? 'bg-emerald-500 border-emerald-500 text-white shadow-sm'
                : 'border-emerald-500 text-emerald-600 hover:bg-emerald-50'
            }">
                                INTERVIEW
                            </button>
                            <button
                                onclick="updateJobStatus(${job.id}, 'rejected')"
                                class="px-4 py-2 border rounded-md text-sm font-semibold transition-all ${job.status === 'rejected'
                ? 'bg-rose-500 border-rose-500 text-white shadow-sm'
                : 'border-rose-500 text-rose-600 hover:bg-rose-50'
            }">
                                REJECTED
                            </button>
                        </div>
                    </div>
                `).join('');
    }


    refreshIcons();
    updateStats();
}


// ----- INITIAL LOAD -----
window.onload = () => {
    renderJobs();
};