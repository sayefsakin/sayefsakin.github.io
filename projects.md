---
layout: page
title: My Projects
subtitle: All the things I have done
---

### [Traveler](https://github.com/sayefsakin/traveler-integrated/tree/data-structure-comp)

The Traveler is an integrated graph visualization system for asynchronous multi-task execution. It uses OTF2 trace data generated from a program execution on Phylanx, parses them, and represents them in different interactive views. Phylanx is a general purpose computation system of distributed arrays to enhance operations over large-scale distributed system. It is an actively-developed system to provide the benefits of distributed resources for data scientists. In this project, I designed node-link diagram and time-series charts to identify dependent and relevant program components. I utilized a customized summed area table and KD-Tree from CGAL to store, modify, query, and fetch backend data for different scalable time-series diagrams. I also utilized the D3 library (scale, brush, axis) and HTML5 canvas with overlapping SVG layers to enable interactive user interfaces. Also tested integration with DiskCach, a fast file based storage, and compared performance with DuckDB and PostgreSQL databases.

Website: [https://github.com/hdc-arizona/traveler-integrated](https://github.com/sayefsakin/traveler-integrated/tree/data-structure-comp)

<iframe class="BLOG_video_class" allowfullscreen="" youtube-src-id="BGMpHgjOo7M" width="600" height="498" src="https://www.youtube.com/embed/BGMpHgjOo7M"></iframe>

### [PerfAnalyzer](https://github.com/sayefsakin/dsi/tree/main/tools/perf_analyzer)

This is a web-based dashboard to correlate performance changes to source code modifications. This web-based dashboard was developed using Plotly and DASH to correlate scientific software performance changes with source code modifications. After collecting tracing and profiling data using TAU, I built an interfacing with MySQL database that enabled a flexible performance data storage with user-friendly query interface. Using this dashboard, conducted a preliminary source code history analysis of a scientific software.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiwKub1eA81zyvlgKkssb8g-110knmKQzqqbRMOX7ivb-vN4-RIKuYcMFr3nexkWLMthJ3orP2yLuoAdRjxCJ_CfltF_Zw2M8eIopAhTfSTESsDXpYC0kZv5sdoksfKhF3oPwGqRuc8XgGYNY_K9b7PBum4UEvoDtqDnvwPPKV5xraau02pKa9ng3PTALk/s1600/PerfAnalyzer.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiwKub1eA81zyvlgKkssb8g-110knmKQzqqbRMOX7ivb-vN4-RIKuYcMFr3nexkWLMthJ3orP2yLuoAdRjxCJ_CfltF_Zw2M8eIopAhTfSTESsDXpYC0kZv5sdoksfKhF3oPwGqRuc8XgGYNY_K9b7PBum4UEvoDtqDnvwPPKV5xraau02pKa9ng3PTALk/s1600/PerfAnalyzer.png)

Website: [https://github.com/sayefsakin/dsi/tree/main/tools/perf\_analyzer](https://github.com/sayefsakin/dsi/tree/main/tools/perf_analyzer)

### [AutoProfiler](https://github.com/pnnl/ExaGO/tree/develop/performance_analysis)

In the [ExaGO](https://www.pnnl.gov/publications/grid-modeling-tool-successfully-launches-worlds-fastest-supercomputer) project, a collection of software packages for solving power grid optimization problems, I developed a tool to automate the overall performance analysis pipeline. I worked on optimizing application code on Exascale platforms, created unit tests, compiled and run code on HPC platforms, enabled multi-platform (CPU and GPU) profiling by easy integration with TAU, HPCToolkit, and Nvidia Nsight. Also I worked on developing an automated build-system of ExaGO for the Frontier and Summit Supercomputers by leveraging the Spack package manager. I designed scripts to estimate the strong and weak scaling measurements of ExaGO on these Supercomputing platforms.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjH8KlqbivTRcVsf5x-l_HFvZF6Pwysoi0ixKYiqITrNwmNGUvFKMn1kbgLq57_N27kKH1wxQ5FhGcI_qbNhec24_Y3SbLoVFBY91pYRMbtegx7YQ5TCywfkHfnKaKY1ASiWzCq5kW-bz2mSSXa3lg8EKq0it6BzvboncKsggPrkXwM_oUpl5I-3DK5ZvG/s1600/Screenshot%202025-03-19%20044552.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjH8KlqbivTRcVsf5x-l_HFvZF6Pwysoi0ixKYiqITrNwmNGUvFKMn1kbgLq57_N27kKH1wxQ5FhGcI_qbNhec24_Y3SbLoVFBY91pYRMbtegx7YQ5TCywfkHfnKaKY1ASiWzCq5kW-bz2mSSXa3lg8EKq0it6BzvboncKsggPrkXwM_oUpl5I-3DK5ZvG/s1600/Screenshot%202025-03-19%20044552.png)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9YJjwZq5iI_g4GrAA0_6eoD7uZeWgQncagjM1oj_BMQw118Ug1cz-kMB-qJ9x1KErj6SxD2JghTfPdoTZiXdUt2Epe6wNgeHiWbosOcHpveCj4zaWglMWPDbz911C0ewhvnjOsrHJrjBW9K197i6r9f6wfUspaE-M_4dgaJOitSBx8XXm_pVXrK5wyNNB/s1600/Screenshot%202025-03-19%20045747.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9YJjwZq5iI_g4GrAA0_6eoD7uZeWgQncagjM1oj_BMQw118Ug1cz-kMB-qJ9x1KErj6SxD2JghTfPdoTZiXdUt2Epe6wNgeHiWbosOcHpveCj4zaWglMWPDbz911C0ewhvnjOsrHJrjBW9K197i6r9f6wfUspaE-M_4dgaJOitSBx8XXm_pVXrK5wyNNB/s1600/Screenshot%202025-03-19%20045747.png)

Website: [https://github.com/pnnl/ExaGO/tree/develop/performance\_analysis](https://github.com/pnnl/ExaGO/tree/develop/performance_analysis)

### [WRAN-NS3](https://github.com/sayefsakin/wran-ns3)

At the end of my MS research, with Professor Dr. Md. Abdur Razzaque in his Green Networking Research (GNR) Lab, I developed a dedicated NS3 (network simulator 3) module for wireless regional area network to simulate and test our solution methodology. This work was partially supported by a grant for the Research Fellowship funded by the [Information and Communication Technology Division, Ministry of Posts, Telecommunications and Information Technology, Government of Bangladesh.](https://ptd.gov.bd/) More about this project can be found in [this blog post.](https://sayefsakin.blogspot.com/2018/02/a-dedicated-ns-3-module-for-ieee-80222.html)

Website: [https://github.com/sayefsakin/wran-ns3](https://github.com/sayefsakin/wran-ns3)

### [IssMan](https://issman.com)

During my employment with [Structured Data Systems Limited](https://www.linkedin.com/company/structured-data-systems-limited/about/), I started working in IssMan (Issue Manager) project as an iOS developer. The project aims to provide convenient ways for punch-lists, photo documentation, snagging and reporting. Although my work was limited, initially, in designing responsive user interfaces (UI), I designed synchronization module, later on, to ensure live update of images and data between server and client application. I also implemented a timer-module to keep the application synchronized with proper time fetched from different time servers. I also have experience working with analytics tools like Flurry, New relics, etc.

After completing my MS, I was promoted to a full-time software engineer at SDSL. My primary job responsibility was an application server developer where I developed and maintained servlet-based java web-application providing API access to different services over multitude of clients (android, web, iOS etc.). As a system administrator, I was responsible for server upgrading, performance monitoring, load-balancing, and troubleshooting. I had opportunity to work with different cloud based services like Rackspace Cloud API, Amaozn Web Services, Amazon Glaciers, Google Cloud Platform, etc. Being in charge of database and storage management, I was liable for designing relational database, updating procedure calls, making backup, and migration. I wrote several shell scripts to automatically fetch updated files from Rackspace Cloud File containers and store them on Amazon Vault while logging each file name with respective update time. Running separate cron jobs, to create daily backups of database and store them on amazon vault while removing older backups, was proposed and developed by me for better fail-safe measurement.

Website: [https://issman.com](https://issman.com)

### [ShohojShoncoi](https://github.com/sayefsakin/SohojSoncoi)

It is a personal ledger for calculating daily income, expense, tracking bills, loans using reminders, alarms etc. It also has a dedicated facebook based forum for user cooperation. It also contains video tutorial which is provided using a YouTube Channel. This project was partially funded by the ministry of [ICT division, Government of the People's Republic of Bangladesh](https://ictd.gov.bd/) and developed to assist people with lower income by providing them a tool to improve their living condition.

Website: [https://github.com/sayefsakin/SohojSoncoi](https://github.com/sayefsakin/SohojSoncoi)