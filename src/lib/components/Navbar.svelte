<script>
  import '../../app.pcss';
    import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar>
    <NavHamburger  />
    <NavUl >
      <NavLi class="nav-link" href="/">skills</NavLi>
      <NavLi href="/about">works</NavLi>
      <NavLi href="/contact">contact</NavLi>
    </NavUl>
  </Navbar>