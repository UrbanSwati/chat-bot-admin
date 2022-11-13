<script setup>
import TopMenuBar from "./components/TopMenuBar.vue";
import SideMenuBar from "./components/SideMenuBar.vue";
</script>

<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <side-menu-bar></side-menu-bar>

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Topbar -->
        <top-menu-bar></top-menu-bar>

        <!-- Begin Page Content -->
        <div class="container-fluid">
          <RouterView />
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Thabo Chat Bot 2022</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
</template>

<style scoped></style>
