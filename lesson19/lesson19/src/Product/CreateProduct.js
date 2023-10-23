import React from 'react';
import { Container, } from 'reactstrap';
import { Input,Button    } from 'antd';
import { useFormik } from 'formik';

const CreateProduct =()=>{
    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


    return (
        <Container>
        <form>
            <div className='mt-5'>
                <Input
                 addonBefore='ID'
                 placeholder='Enter your'
                 size='large'
                />
            </div>
            <div className='mt-5'>
                <Input
                 addonBefore='Title'
                 placeholder='Enter your'
                 size='large'
                />
            </div>
            <div className='mt-5'>
                <Input
                 addonBefore='Description'
                 placeholder='Enter your'
                 size='large'
                />
            </div>
            <div className='mt-5'>
                <Input
                 addonBefore='Image'
                 placeholder='Enter your'
                 size='large'
                />
            </div>
            <div className='mt-5'>
            <Button type="primary" danger>
                Add Product
            </Button>
            </div>
        </form>
        </Container>
    );

    
};

export default CreateProduct;