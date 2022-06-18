import Title from '../components/Title'

export default function AboutMe() {
  return (
    <div className="flex justify-center py-2 pb-5">
      <div className="w-4/6">
        <Title title="About Me" isPurple={true} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate tellus in eros efficitur ultricies. In scelerisque enim eu diam gravida, vel porta arcu placerat. Curabitur et lectus quis ex placerat posuere a in nisi. Nam non lectus ut dui placerat dapibus. Praesent non urna leo. Sed felis velit, fermentum quis tincidunt vel, aliquam eu dolor. Praesent at urna pulvinar, maximus metus nec, hendrerit nisl. Morbi ac pulvinar leo. Fusce ut nunc lectus. Nulla dictum egestas erat ut lobortis. Nullam molestie ex sit amet ex feugiat, ac lobortis magna varius. Suspendisse potenti. Pellentesque laoreet odio sit amet nisi efficitur, eget aliquet purus scelerisque. In non eros sed elit consectetur interdum in sit amet est.</p>
        <br />
        <p>Nam in ultricies turpis, sed imperdiet metus. Quisque laoreet tortor id ullamcorper gravida. Morbi finibus et purus sit amet condimentum. Integer turpis velit, rutrum at pulvinar in, facilisis et justo. Nunc viverra nibh diam, sed posuere diam tincidunt id. Vestibulum nec aliquet leo. Vivamus interdum vel libero vitae lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam augue arcu, consectetur a tincidunt sit amet, tempor vitae est. Vestibulum vestibulum ullamcorper justo vitae gravida.</p>
        <br />
        <p>Ut varius nisl dui, quis tempor nunc vulputate at. Etiam iaculis porta porta. Sed blandit congue sagittis. Nulla pulvinar dictum fringilla. Ut ullamcorper ex pretium elit congue fermentum. Nullam id placerat mi. Sed consectetur dui efficitur, lobortis velit ac, ullamcorper eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc laoreet accumsan erat, quis volutpat libero mattis quis. In eu convallis elit.</p>
      </div>
    </div>
  )
}
