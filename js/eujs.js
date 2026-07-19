     const DATA = {
about: {
  icon: '👤',
  title: 'Professional Summary',
  sub: 'Adding Value Through Technology & Education',
  html: `
    <div class="highlight-box">
      <img src="img/eu.jpg"
           alt="Fernando Quissanga"
           style="width:100px; height:100px; border-radius:50%; object-fit:cover; display:block; margin:0 auto 15px;">

      <p class="txt" style="margin:0; font-weight:600; color:var(--text);">
      "Multidisciplinary professional bridging technology, education, and digital marketing.
      Proven ability to manage large-scale projects (GiraMais/ENBI) while delivering high-quality
      software solutions and impactful training."
      </p>
    </div>

    <p class="txt">
      I'm <strong>Fernando Quissanga</strong>, a
      <strong>Computer Engineering student (3rd Year)</strong>
      with <strong>7+ years of hands-on experience</strong> across multiple disciplines.
    </p>

    <div class="stats">
      <div class="stat"><span class="stat-n">7+</span><span class="stat-l">Years Exp.</span></div>
      <div class="stat"><span class="stat-n">B2/C1</span><span class="stat-l">English</span></div>
      <div class="stat"><span class="stat-n">ENBI</span><span class="stat-l">GiraMais</span></div>
      <div class="stat"><span class="stat-n">3</span><span class="stat-l">Key Areas</span></div>
    </div>

    <p class="txt" style="font-weight:700; color:var(--primary);">
      🎯 <strong>Target Roles:</strong><br>
      📱 Android Developer | 🌐 Front-End Web Developer |
      👨‍🏫 Technical Educator (Physics, English & Programming) |
      📊 Digital Marketing (Copywriting)
    </p>
  `
},
          
     projects: {
     icon: '🚀', title: 'Key Projects', sub: 'Real-World Impact',
     html: `
     <div class="skills-grid">
     <div class="skill-card">
     <div class="skill-header">
     <div class="skill-icon" style="background:#DBEAFE; color:#2563EB;"><i class="fas fa-bus"></i></div>
     <div><div class="skill-name">GiraMais (ENBI)</div><div class="skill-source">National Ticketing System</div></div>
     </div>
     <p class="txt" style="font-size:0.85rem; margin-bottom:8px;">Managed documentation, data organization, and administrative support for Angola's integrated mobility project.</p>
     <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:10px;"><span style="background:#E0F2FE; color:#0369A1; padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">Excel Advanced</span><span style="background:#E0F2FE; color:#0369A1; padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">Process Management</span></div>
     <div style="display:flex; gap:6px;">
     <a href="https://www.giramais.co.ao/" target="_blank" style="flex:1; padding:6px; background:#2563EB; color:#fff; text-align:center; border-radius:4px; text-decoration:none; font-size:0.75rem; font-weight:700;"><i class="fas fa-user"></i> Demo</a>
     <a href="#" style="flex:1; padding:6px; background:#24292e; color:#fff; text-align:center; border-radius:4px; text-decoration:none; font-size:0.75rem; font-weight:700;"><i class="fas fa-code"></i> Code</a>
     </div>
     </div>
     <div class="skill-card">
     <div class="skill-header">
     <div class="skill-icon" style="background:#DCFCE7; color:#15803D;"><i class="fas fa-globe"></i></div>
     <div><div class="skill-name">Interactive Portfolio</div><div class="skill-source">GitHub Pages</div></div>
     </div>
     <p class="txt" style="font-size:0.85rem; margin-bottom:8px;">This responsive portfolio with Canvas animations, 3D elements, and interactive city map navigation.</p>
     <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:10px;"><span style="background:#DCFCE7; color:#15803D; padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">HTML5/CSS3</span><span style="background:#DCFCE7; color:#15803D; padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">Vanilla JS</span><span style="background:#DCFCE7; color:#15803D; padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">Canvas API</span></div>
     <div style="display:flex; gap:6px;">
     <a href="https://nando-kissanga.github.io/nandoport/eu.html" target="_blank" style="flex:1; padding:6px; background:#2563EB; color:#fff; text-align:center; border-radius:4px; text-decoration:none; font-size:0.75rem; font-weight:700;"><i class="fas fa-user"></i> Demo</a>
     <a href="https://github.com/Nando-Kissanga/nandoport" target="_blank" style="flex:1; padding:6px; background:#24292e; color:#fff; text-align:center; border-radius:4px; text-decoration:none; font-size:0.75rem; font-weight:700;"><i class="fas fa-code"></i> Code</a>
     </div>
     </div>
     </div>
     <p style="text-align:center; margin-top:12px; font-size:0.85rem; color:var(--text-light);"><i class="fas fa-plus-circle"></i> More projects coming soon...</p>
     `
     },
     skills: {
     icon: '📚', title: 'Technical Skills', sub: 'Where I Studied Each Technology',
     html: `
     <div class="skills-grid">
     <div class="skill-card">
     <div class="skill-header">
     <div class="skill-icon" style="color:#E34F26;"><i class="fab fa-html5"></i></div>
     <div><div class="skill-name">HTML5 & CSS3</div><div class="skill-source">W3Schools, MDN, FreeCodeCamp, TutorialsPoint</div></div>
     </div>
     <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
     </div>
     <div class="skill-card">
     <div class="skill-header">
     <div class="skill-icon" style="color:#F7DF1E;"><i class="fab fa-js"></i></div>
     <div><div class="skill-name">JavaScript (ES6+)</div><div class="skill-source">FreeCodeCamp, Traversy Media, W3Schools</div></div>
     </div>
     <div class="skill-bar"><div class="skill-fill" style="width:80%"></div></div>
     </div>
     <div class="skill-card">
     <div class="skill-header">
     <div class="skill-icon" style="color:#3DDC84;"><i class="fab fa-android"></i></div>
     <div><div class="skill-name">Android (Kotlin/Java)</div><div class="skill-source">INSTIC, Official Android Docs, Udemy</div></div>
     </div>
     <div class="skill-bar"><div class="skill-fill" style="width:75%"></div></div>
     </div>
     <div class="skill-card">
     <div class="skill-header">
     <div class="skill-icon" style="color:#ED8B00;"><i class="fab fa-java"></i></div>
     <div><div class="skill-name">Java</div><div class="skill-source">INSTIC, TutorialsPoint, SoloLearn</div></div>
     </div>
     <div class="skill-bar"><div class="skill-fill" style="width:80%"></div></div>
     </div>
     <div class="skill-card">
     <div class="skill-header">
     <div class="skill-icon" style="color:#3776AB;"><i class="fab fa-python"></i></div>
     <div><div class="skill-name">Python</div><div class="skill-source">INSTIC, W3Schools, Corey Schafer (YouTube)</div></div>
     </div>
     <div class="skill-bar"><div class="skill-fill" style="width:60%"></div></div>
     </div>
     <div class="skill-card">
     <div class="skill-header">
     <div class="skill-icon" style="color:#217346;"><i class="fas fa-file-excel"></i></div>
     <div><div class="skill-name">Excel Advanced</div><div class="skill-source">ENBI (GiraMais), Microsoft Learn</div></div>
     </div>
     <div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
     </div>
     <div class="skill-card">
     <div class="skill-header">
     <div class="skill-icon" style="color:#336791;"><i class="fas fa-database"></i></div>
     <div><div class="skill-name">SQL & Data</div><div class="skill-source">INSTIC, W3Schools, SQLZoo</div></div>
     </div>
     <div class="skill-bar"><div class="skill-fill" style="width:70%"></div></div>
     </div>
     <div class="skill-card">
     <div class="skill-header">
     <div class="skill-icon" style="color:#1976D2;"><i class="fas fa-network-wired"></i></div>
     <div><div class="skill-name">Computer Networks</div><div class="skill-source">INSTIC, Cisco NetAcad (Theoretical)</div></div>
     </div>
     <div class="skill-bar"><div class="skill-fill" style="width:65%"></div></div>
     </div>
     </div>
     `
     },
     languages: {
     icon: '🌐', title: 'Languages', sub: 'Communication Skills',
     html: `
     <div class="skills-grid">
     <div class="skill-card">
     <div class="skill-header">
     <div class="skill-icon">🇦🇴</div>
     <div><div class="skill-name">Portuguese</div><div class="skill-source">Native Proficiency</div></div>
     </div>
     <div class="skill-bar"><div class="skill-fill" style="width:100%"></div></div>
     </div>
     <div class="skill-card">
     <div class="skill-header">
     <div class="skill-icon">🇬🇧</div>
     <div><div class="skill-name">English</div><div class="skill-source">Fluent (B2/C1) — Teaching Experience</div></div>
     </div>
     <div class="skill-bar"><div class="skill-fill" style="width:85%"></div></div>
     </div>
     </div>
     `
     },
     exp: {
     icon: '💼', title: 'Professional Experience', sub: '7+ Years of Growth',
     html: `
     <div class="tl">
     <div class="tl-item">
     <div class="tl-date">2025 – 2026</div>
     <div class="tl-t">English Teacher</div>
     <div class="tl-c">EDENGLISH – Online (Remote, Brazil)</div>
     <div class="tl-d"><ul><li>Dynamic classes focused on conversation and fluency.</li><li>Digital marketing strategies for student acquisition.</li></ul></div>
     </div>
     <div class="tl-item">
     <div class="tl-date">May 2024 – Aug 2025</div>
     <div class="tl-t">Service Provider</div>
     <div class="tl-c">ENBI – National Integrated Ticketing Company (Luanda)</div>
     <div class="tl-d"><ul><li>GiraMais project: document management, data spreadsheets.</li><li>Administrative support ensuring operational excellence.</li></ul></div>
     </div>
     <div class="tl-item">
     <div class="tl-date">May 2024 – Feb 2025</div>
     <div class="tl-t">Supervisor</div>
     <div class="tl-c">DOWELL – Consulting & Training (Talatona)</div>
     <div class="tl-d"><ul><li>Supervised operational teams for ENBI.</li><li>Internal process improvement and quality assurance.</li></ul></div>
     </div>
     <div class="tl-item">
     <div class="tl-date">2023 – Apr 2024</div>
     <div class="tl-t">English Teacher & Marketing Manager</div>
     <div class="tl-c">New Generation Training Center (Luanda)</div>
     <div class="tl-d"><ul><li>Classes for all levels. Marketing for course promotion.</li></ul></div>
     </div>
     <div class="tl-item">
     <div class="tl-date">Nov 2019 – Present</div>
     <div class="tl-t">Private Tutor (Freelancer)</div>
     <div class="tl-c">In-person & Remote</div>
     <div class="tl-d"><ul><li>Mathematics, Physics, English, Programming (Logic).</li></ul></div>
     </div>
     <div class="tl-item">
     <div class="tl-date">Jun 2017 – Jan 2019</div>
     <div class="tl-t">English Teacher</div>
     <div class="tl-c">Imagination Training Center (Chicala)</div>
     <div class="tl-d"><ul><li>All levels, lesson planning, continuous assessment.</li></ul></div>
     </div>
     </div>
     `
     },
     education: {
     icon: '🎓', title: 'Education', sub: 'Academic Background',
     html: `
     <div class="tl">
     <div class="tl-item">
     <div class="tl-date">2019 – Present</div>
     <div class="tl-t">Computer Engineering (3rd Year)</div>
     <div class="tl-c">INSTIC – Instituto Superior de Tecnologia e Comunicação</div>
     </div>
     <div class="tl-item">
     <div class="tl-date">2014 – 2016</div>
     <div class="tl-t">Energy & Electrical Installations (12th Grade)</div>
     <div class="tl-c">IMPS – Instituto Médio Politécnico do Sambizanga</div>
     </div>
     </div>
     `
     },
     contact: {
     icon: '📬', title: 'Get In Touch', sub: 'I\'d love to hear from you',
     html: `
     <div class="contacts">
     <a href="https://wa.me/244946269760" target="_blank" class="ct">
     <div class="ct-i"><i class="fab fa-whatsapp"></i></div>
     <div class="ct-l">WhatsApp</div>
     <div class="ct-v">+244 946 269 760</div>
     </a>
     <a href="mailto:nandokissanga@gmail.com" class="ct">
     <div class="ct-i"><i class="fas fa-envelope"></i></div>
     <div class="ct-l">Email</div>
     <div class="ct-v">nandokissanga@gmail.com</div>
     </a>
     <a href="https://www.linkedin.com/in/fernando-quissanga-761b6b347" target="_blank" class="ct">
     <div class="ct-i"><i class="fab fa-linkedin-in"></i></div>
     <div class="ct-l">LinkedIn</div>
     <div class="ct-v">View Profile</div>
     </a>
     <a href="https://github.com/Nando-Kissanga" target="_blank" class="ct">
     <div class="ct-i"><i class="fab fa-github"></i></div>
     <div class="ct-l">GitHub</div>
     <div class="ct-v">@Nando-Kissanga</div>
     </a>
     </div>
     <p class="txt" style="font-weight:700;">📩 Quick Message:</p>
     <form class="contact-form" onsubmit="enviarMensagem(event)">
     <input type="text" id="msgNome" placeholder="Your Name" required>
     <input type="email" id="msgEmail" placeholder="Your Email" required>
     <textarea id="msgTexto" rows="3" placeholder="Your message..." required></textarea>
     <button type="submit"><i class="fas fa-paper-plane"></i> Send Message</button>
     </form>
     <p id="msgStatus" style="text-align:center;margin-top:8px;font-size:0.8rem;color:var(--primary);display:none;"></p>
     `
     },
     blog: {
     icon: '📝', title: 'Blog & Lessons', sub: 'Educational Content',
     html: `
     <div class="skills-grid">
     <div class="skill-card">
     <div class="skill-header">
     <div class="skill-icon" style="color:#DC2626;"><i class="fas fa-atom"></i></div>
     <div><div class="skill-name">Physics: Kinematics</div><div class="skill-source">Introductory Lesson</div></div>
     </div>
     <p class="txt" style="font-size:0.85rem;">Fundamental concepts of motion, velocity, and acceleration for beginners.</p>
     <a href="https://nando-kissanga.github.io/aulas/0Ens.%20Introcao1.html" target="_blank" style="display:block; text-align:center; padding:8px; background:var(--primary); color:#fff; border-radius:4px; text-decoration:none; font-weight:700; font-size:0.85rem;"><i class="fas fa-external-link-alt"></i> View Article</a>
     </div>
     <div class="skill-card">
     <div class="skill-header">
     <div class="skill-icon" style="color:#2563EB;"><i class="fas fa-language"></i></div>
     <div><div class="skill-name">English Fundamentals</div><div class="skill-source">Beginner Guide</div></div>
     </div>
     <p class="txt" style="font-size:0.85rem;">Greetings, introductions, and essential vocabulary building for beginners.</p>
     <a href="https://nando-kissanga.github.io/aulas/0Ens.%20Introcao2.html" target="_blank" style="display:block; text-align:center; padding:8px; background:var(--primary); color:#fff; border-radius:4px; text-decoration:none; font-weight:700; font-size:0.85rem;"><i class="fas fa-external-link-alt"></i> View Article</a>
     </div>
     </div>
     `
     }
     };
     
     function enviarMensagem(e) {
     e.preventDefault();
     const nome = document.getElementById('msgNome').value.trim();
     const email = document.getElementById('msgEmail').value.trim();
     const texto = document.getElementById('msgTexto').value.trim();
     const status = document.getElementById('msgStatus');
     if (!nome || !email || !texto) { status.textContent = 'Please fill in all fields.'; status.style.display = 'block'; status.style.color = '#f44336'; return; }
     const subject = encodeURIComponent(`Contact from ${nome} - Portfolio`);
     const body = encodeURIComponent(`Name: ${nome}\nEmail: ${email}\n\nMessage:\n${texto}`);
     window.location.href = `mailto:nandokissanga@gmail.com?subject=${subject}&body=${body}`;
     status.textContent = '✅ Opening email client...';
     status.style.display = 'block'; status.style.color = 'var(--primary)';
     document.getElementById('msgNome').value = '';
     document.getElementById('msgEmail').value = '';
     document.getElementById('msgTexto').value = '';
     }
     
     const LOCAIS = ['about', 'projects', 'skills', 'languages', 'exp', 'education', 'contact', 'blog'];
     const NOMES = { about:'About', projects:'Projects', skills:'Skills', languages:'Langs', exp:'Experience', education:'Education', contact:'Contact', blog:'Blog' };
     const char=document.getElementById('char'), shadow=document.getElementById('shadow'), city=document.getElementById('city'), overlay=document.getElementById('overlay'), curPlace=document.getElementById('current-place');
     let atual='about', movendo=false, lastX=0;
     
     const canvas=document.getElementById('rainCanvas'), ctx=canvas.getContext('2d');
     let drops=[], chuvaAtiva=false, rainAnimationId=null;
     function resizeCanvas(){canvas.width=city.offsetWidth;canvas.height=city.offsetHeight;}
     window.addEventListener('resize',resizeCanvas);resizeCanvas();
     function initRain(){drops=[];for(let i=0;i<80;i++){drops.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,length:Math.random()*20+10,speed:Math.random()*5+5});}}
     function drawRain(){if(!chuvaAtiva){ctx.clearRect(0,0,canvas.width,canvas.height);return;}ctx.clearRect(0,0,canvas.width,canvas.height);ctx.strokeStyle='rgba(174,194,224,0.6)';ctx.lineWidth=1.5;ctx.beginPath();for(let i=0;i<drops.length;i++){let d=drops[i];ctx.moveTo(d.x,d.y);ctx.lineTo(d.x,d.y+d.length);d.y+=d.speed;if(d.y>canvas.height){d.y=-20;d.x=Math.random()*canvas.width;}}ctx.stroke();rainAnimationId=requestAnimationFrame(drawRain);}
     function toggleChuva(){chuvaAtiva=!chuvaAtiva;const b=document.getElementById('btnChuva');if(chuvaAtiva){b.innerHTML='<i class="fas fa-sun"></i> Clear';canvas.classList.add('active');initRain();drawRain();}else{b.innerHTML='<i class="fas fa-cloud-rain"></i> Rain';canvas.classList.remove('active');cancelAnimationFrame(rainAnimationId);ctx.clearRect(0,0,canvas.width,canvas.height);}}
     
     function posChar(id){
     const dest=document.getElementById(id),cR=city.getBoundingClientRect(),dR=dest.getBoundingClientRect();
     const x=(dR.left-cR.left)+(dR.width/2)-18,y=(dR.top-cR.top)+(dR.height)-14;
     if(x>lastX+2)char.style.transform='scaleX(-1)';else if(x<lastX-2)char.style.transform='scaleX(1)';
     lastX=x;char.style.zIndex=Math.floor(y);shadow.style.zIndex=Math.floor(y)-1;
     char.style.left=x+'px';char.style.top=y+'px';shadow.style.left=(x+6)+'px';shadow.style.top=(y+28)+'px';
     }
     function destacar(id){document.querySelectorAll('.b').forEach(b=>b.classList.remove('active'));document.getElementById(id).classList.add('active');}
     function abrirModal(id){const d=DATA[id];document.getElementById('mIcon').textContent=d.icon;document.getElementById('mTitle').textContent=d.title;document.getElementById('mSub').textContent=d.sub;document.getElementById('mBody').innerHTML=d.html;overlay.classList.add('on');document.body.style.overflow='hidden';}
     function abrirEstrutura(){document.getElementById('mIcon').textContent='🗺️';document.getElementById('mTitle').textContent='Site Map';document.getElementById('mSub').textContent='Quick Navigation';document.getElementById('mBody').innerHTML=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;">${LOCAIS.map(l=>`<div onclick="moverPara('${l}');fecharModalDirect();" style="background:var(--card-bg);padding:16px;border-radius:var(--radius-md);display:flex;align-items:center;gap:12px;border:1px solid var(--border);cursor:pointer;"><span style="font-size:1.5rem;">${DATA[l].icon}</span><div><div style="font-weight:700;font-size:0.9rem;">${NOMES[l]}</div><div style="font-size:0.7rem;color:var(--text-light);">${DATA[l].sub}</div></div></div>`).join('')}</div><div style="margin-top:16px;text-align:center;"><a href="https://github.com/Nando-Kissanga/nandoport" target="_blank" style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;border-radius:var(--radius-md);text-decoration:none;font-weight:700;"><i class="fab fa-github"></i> View Source Code on GitHub</a></div>`;overlay.classList.add('on');document.body.style.overflow='hidden';}
     function fecharModalDirect(){overlay.classList.remove('on');document.body.style.overflow='';}
     function fecharModal(e){if(!e||e.target===overlay)fecharModalDirect();}
     function moverPara(id){if(movendo)return;if(atual===id){abrirModal(id);return;}movendo=true;curPlace.textContent=NOMES[id];localStorage.setItem('lastPlace',id);char.classList.add('walking');posChar(id);destacar(id);atual=id;setTimeout(()=>{movendo=false;char.classList.remove('walking');abrirModal(id);},600);}
     function voltarInicio(){if(overlay.classList.contains('on'))fecharModalDirect();moverPara('about');}
     
     document.addEventListener('keydown',(e)=>{if(overlay.classList.contains('on')){if(e.key==='Escape'){e.preventDefault();fecharModalDirect();}return;}const num=parseInt(e.key);if(num>=1&&num<=8){e.preventDefault();moverPara(LOCAIS[num-1]);return;}const idx=LOCAIS.indexOf(atual);if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();moverPara(LOCAIS[(idx+1)%LOCAIS.length]);}else if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();moverPara(LOCAIS[(idx-1+LOCAIS.length)%LOCAIS.length]);}});
     let rto;window.addEventListener('resize',()=>{clearTimeout(rto);rto=setTimeout(()=>posChar(atual),100);});
     function toggleTheme(){document.body.classList.toggle('dark');localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light');}
     window.addEventListener('load',()=>{const st=localStorage.getItem('theme');if(st==='dark')document.body.classList.add('dark');const lp=localStorage.getItem('lastPlace')||'about';posChar(lp);destacar(lp);atual=lp;curPlace.textContent=NOMES[atual];});
     

