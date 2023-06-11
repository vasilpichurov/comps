import Button from '../components/Button'
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function ButtonPage() {
  return (
    <div>
      <div>
        <Button secondary rounded className='mb-5'>
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button rounded danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deals!</Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Something!
        </Button>
      </div>
    </div>
  )
}

export default ButtonPage
