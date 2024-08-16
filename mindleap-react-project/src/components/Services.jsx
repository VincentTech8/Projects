import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css'; - If we do not want any customisation. (If yes, see App.css)

const Services = () => {
  return (
    <div id='services' className='bg-[#f7f8fc]'>
      <div className='pt-28 px-4 container mx-auto'>
        <div className='space-y-5 text-center'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>
            What Can We Do Together
          </h2>
          <p className='md:w-1/2 mx-auto'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        {/* Service Category - react-tabs here */}
        <div className='py-12 md:w-4/5 mx-auto'>
          <Tabs>
            <TabList className='flex flex-wrap justify-between items-center md:gap-8 gap-4'>
              <Tab>Couple Counseling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </TabList>

            <TabPanel>
              <div>
                <h3>
                  
                </h3>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services