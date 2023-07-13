<template>
  <div class="container px-1 py-1">
  <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-box-seam-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z"/>
        </svg>
        <span class="fs-4">Smark Blockchain Playbook</span>
      </a>
      <ul class="nav nav-pills">
        <li class="nav-item"><NuxtLink to="/" class="nav-link active" aria-current="page">Home</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/chat/aichat" class="nav-link">AI Chat</NuxtLink></li>
        <!-- <li class="nav-item"><NuxtLink to="/docs/" external class="nav-link">Documents</NuxtLink></li> -->
        <li class="nav-item"><a href="/docs/" target="_blank" class="nav-link">Documents</a></li>
        <li class="nav-item"><NuxtLink to="/mindmap/learningmap" class="nav-link">Learning Map</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
      </ul>
    </header>
  </div>
  <div class="container px-1">
    <NuxtPage />
  </div>
  <div class="container px-1 py-1 border-top">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-1">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
      </div>
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </footer>
  </div>
</template>