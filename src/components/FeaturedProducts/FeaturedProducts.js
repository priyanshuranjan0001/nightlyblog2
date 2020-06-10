import React from 'react'
import { Row, Col, Card } from 'antd'
import data from './data.json'

const FeaturedProducts = () => {
  return (
    <Row className="mb-2" type="flex">
      {data.map((product, i) => (
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          key={product.name}
          className="bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/featured-products-bg/${i + 1}.jpg)` }}
        >
         
        </Col>
      ))}
    </Row>
  )
}
export default FeaturedProducts 



