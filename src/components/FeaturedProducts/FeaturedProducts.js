import React from 'react'
import { Row, Col, Card } from 'antd'
import data from './data.json'

const FeaturedProducts = () => {
  return (
    <Row className="" type="">
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
          <Card
            className="featured-product h-full rounded-none"
            bordered={false}
            bodyStyle={{ padding:  }}
          >
            <Row className="">
              <Col xs={4} sm={6} md={6} lg={5} xl={5} className="text-center">
                <img src={product.logo} alt="" height="0" width="0" className="mt-2" />
              </Col>
              <Col xs={20} sm={} md={} lg={} xl={}>
                <h3 className="mb-1 text-white">{product.name}</h3>
                <p className="mb-0">
                  {product.description}{' '}
                  <a href={product.link} className="block text-white">
                    
                  </a>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default FeaturedProducts
