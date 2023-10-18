import { fireEvent, render,screen } from '@testing-library/react-native'
import 'react-native'
import { AppButton, AppText } from '../src/components'
import {Text} from 'react-native'
import rendered from 'react-test-renderer'

jest.mock('@shopify/react-native-skia')

describe('AppText Component',()=>{
    it('snapshot testing Apptext',async()=>{
    const tree= rendered.create(<AppText>hello</AppText>).toJSON()
    expect(tree).toMatchSnapshot();
    })

    it('with some string',async()=>{
    const { getByText} =   render(<AppText>hello world</AppText>) 
    expect(getByText('hello world').children[0]).toBe('hello world')
    })

    it('with compoment',async()=>{
    const { getAllByText} =   render(<AppText><Text>hello world</Text><Text>hello world</Text></AppText>) 
    expect(getAllByText('hello world').length).toBe(2)
    })
})

describe('App Button Component',()=>{
    it('snapshot testing button',async()=>{
        const tree= rendered.create(<AppButton title='Title' />).toJSON()
        expect(tree).toMatchSnapshot();
    })
    it('with title',async()=>{
    const { getAllByText} =   render(<AppButton title='Login' />) 
    expect(getAllByText('Login').length).toBe(1)
    })

    it('with loading true',async()=>{
    const fun =  jest.fn(()=>console.log('hello'))
    const { getByTestId } =   render(<AppButton title='Login' onPress={fun} loading={true} />) 
    fireEvent.press(getByTestId('button.presaable'))
    getByTestId('activity.indicator')
    expect(fun.mock.calls).toHaveLength(0)
    })

    it('with loading false',async()=>{
    const fun =  jest.fn(()=>console.log('hello'))
    const { getByTestId,getByText } =   render(<AppButton title='Login' onPress={fun} loading={false} />) 
    getByText('Login')
    fireEvent.press(getByTestId('button.presaable'))
    expect(fun.mock.calls).toHaveLength(1)
    })
})

