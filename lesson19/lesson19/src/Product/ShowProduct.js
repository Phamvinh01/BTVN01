import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import { Container } from 'reactstrap';
const { Meta } = Card;

const ShowProduct =()=>{
    const [listProduct,setlistproduct]=useState([
        {
            id:1,
            title:'Product 1',
            description:'This is the description product 1',
            image:'https://www.investopedia.com/thmb/vbqJtFiJHnvoqwSpDRgArlgcBDs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Term-Definitions_Product-Line-Final-58870113a3ca4770a85cabf3549894bb.jpg'  
        },
        {
            id:2,
            title:'Product 1',
            description:'This is the description product 1',
            image:'https://theecommmanager.com/wp-content/uploads/sites/6/2020/07/17-Product-Attribute-Examples-Types-for-Ecommerce-01.png'
        },
        {
            id:3,
            title:'Product 1',
            description:'This is the description product 2',
            image:'https://theecommmanager.com/wp-content/uploads/sites/6/2020/07/17-Product-Attribute-Examples-Types-for-Ecommerce-01.png'
        },
        {
            id:4,
            title:'Product 1',
            description:'This is the description product 3',
            image:'https://theecommmanager.com/wp-content/uploads/sites/6/2020/07/17-Product-Attribute-Examples-Types-for-Ecommerce-01.png'
        }
    ]);
    return (
        <Container className='mt-5'>
            
  <Row justify={'space-elevent'}>
    {
        listProduct.map((product)=>{
            return (
                <Col xl={6} lg={8} md={12} sm={24} style={{ padding: '8px' }}>
					<Card
						style={{
							width: '100%',
						}}
						cover={
							<img
								alt='example'
								src={product.image}
							/>
						}
						actions={[
							<EditOutlined key='edit' />,
							<EllipsisOutlined key='ellipsis' />,
						]}
					>
						<Meta
							title={product.title}
							description={product.description}
						/>
					</Card>
				</Col>
            )
        })
    }
  </Row>
        </Container>
    )
};

export default ShowProduct;