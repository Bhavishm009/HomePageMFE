import React from 'react'
import Offercard from './Offercard';



export default {
    title: 'Component/Offercard',
    parameters: {
        component: Offercard,
        componentSubtitle:'............................................',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Offercard {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Offercard'
}