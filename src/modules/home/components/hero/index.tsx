import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import './hero.scss'; 
import LocalizedClientLink from "@modules/common/components/localized-client-link";

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6 home-container">
       <div className="row">
        <div className="col">
        <div className="home-text-container">
          <h4 className="home-banner-text1">Welcome To Fashion</h4>
          <div className="home-banner-text2">WOMEN FASHION</div>
          <a className="btn btn-solid" href="/store">
            {/* <Button variant="secondary"> */}
            Shop Now
          {/* </Button> */}
          </a>
        </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Hero
