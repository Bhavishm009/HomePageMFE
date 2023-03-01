import React from 'react'
import Aboutus from './Aboutus';



export default {
    title: 'Component/Aboutus',
    parameters: {
        component: Aboutus,
        componentSubtitle:'this the components of about us we add some info of about us',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Aboutus {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Aboutus'
}