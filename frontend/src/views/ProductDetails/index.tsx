"use client";
import React from "react";
import "./productdetails.scss";
import { Badge, Button, Card, Group, Text } from "@mantine/core";
import { ImCart } from "react-icons/im";

import { TbTruckDelivery } from "react-icons/tb";
import { BiDetail } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

const newcollectons = [
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },

  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
];

const ProductDetails = () => {
  return (
    <div className="productdetailspage">
      <div className="flex flex-wrap my-2">
        <div className="producimages flex-none">
          <div className="flex">
            <img
              className="moreimage mx-2"
              src="/assets/tshirt/1.jpeg"
              alt="img"
            />
            <img className="moreimage" src="/assets/tshirt/1.jpeg" alt="img" />
          </div>
          <div className="flex my-2">
            <img
              className="moreimage mx-2"
              src="/assets/tshirt/1.jpeg"
              alt="img"
            />
            <img className="moreimage" src="/assets/tshirt/1.jpeg" alt="img" />
          </div>
          <div className="flex my-2">
            <img
              className="moreimage mx-2"
              src="/assets/tshirt/1.jpeg"
              alt="img"
            />
            <img className="moreimage" src="/assets/tshirt/1.jpeg" alt="img" />
          </div>
        </div>

        <div className="productdetails mx-2 flex-1 w-32">
          <div>
            <h3>Black T-Shirt For Men</h3>
            <h4 className="text-slate-500">Details of Product</h4>
          </div>
          <div className="my-4 ">
            <h4>&#8377;399/-</h4>
            <div className="flex ">
              <del className="">&#8377;799/- </del>
              <h5 className="text-pink-400 mx-4">(50% OFF)</h5>
            </div>
          </div>

          <div className="selectsize">
            <div>
              <b>SELECT SIZE</b>
              <div className="flex">
                <p className="size">
                  <b>M</b>
                </p>
                <p className="size ">
                  <b>L</b>
                </p>
                <p className="size ">
                  <b>XL</b>
                </p>
                <p className="size ">
                  <b>XXL</b>
                </p>
              </div>
            </div>
          </div>

          <div className="flex">
            <div>
              <Button className="btnclr text-xl">
                <ImCart size={20} className="mx-2 " />
                ADD TO CART
              </Button>
            </div>
            <div>
              <Button className="btnclr mx-2 text-xl">
                <AiOutlineHeart size={25} className="mx-2 icn" />
                WISHLIST
              </Button>
            </div>
          </div>

          <div>
            <hr className="hr" />
            <div>
              <h6 className="my-4 flex ">
                DELIVERY OPTIONS <TbTruckDelivery size={18} className="mx-2" />
              </h6>
            </div>
            <div>
              <p className="text-slate-700">100% Original Products.</p>
              <p className="text-slate-700">
                Easy 14 days returns and exchanges.
              </p>
              <p className="text-slate-700">Try & Buy might be available.</p>
            </div>
          </div>

          <div>
            <hr className="hr" />
            <div>
              <h6 className="my-4 flex ">
                PRODUCT DETAILS <BiDetail size={18} className="mx-2" />
              </h6>
            </div>
            <div>
              <p className="text-slate-700">Black T-shirt for men</p>
              <p className="text-slate-700">Knitted pure cotton fabric</p>
              <p className="text-slate-700">Regular length</p>
              <p className="text-slate-700">Short regular sleeves</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h6 className="my-4 mx-2">SIMILER PRODUCT</h6>
        </div>

        <div className="  flex justify-center items-center">
          <div className=" flex flex-wrap justify-start items-center mt-3 ">
            {newcollectons.map((ns: any, index) => (
              <div className="mb-4 mx-2">
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                  style={{ backgroundColor: "#900c3f" }}
                >
                  <Card.Section>
                    <div className="flex justify-center pt-3">
                      <img src={ns.image} alt={ns.alt} className="images" />
                    </div>
                  </Card.Section>

                  <Group position="apart" mt="md" mb="xs">
                    <Text className="txtclr" weight={500}>
                      {ns.desc}
                    </Text>
                  </Group>

                  <Text size="sm" color="dimmed">
                    <del className="delclr">Rs. {ns.drs} /-</del>
                  </Text>
                  <Text className="txtclr" size="sm">
                    Rs. {ns.rs} /-
                  </Text>

                  <div className="flex">
                    <div className="mx-2">
                      <Button
                        variant="light"
                        className="btnclrr"
                        mt="md"
                        radius="md"
                      >
                        Buy Now
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="light"
                        className="btnclrr"
                        mt="md"
                        radius="md"
                      >
                        Add Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
