import { handleError } from "../../utils/handleErrors";
import { Request, Response } from "express";
import { UserRequest } from "../middleWare/authMiddleWare/authInterfaces";
import biDal from "./bi.dal";

const handelBi = async (req: UserRequest, res: Response) => {
  try {
    const shippings = await biDal.getShipping()
    return res.json(shippings).status(200);
  } catch (error) {
    handleError(res, error, 500);
  }
};

const handelGetOrdersPlacedPerDate = async (req: UserRequest, res: Response) => {
  try {
    const OrdersPerDate = await biDal.getOrdersByDateExecution()
    return res.json(OrdersPerDate).status(200);
  } catch (error) {
    handleError(res, error, 500);
  }
};

const handelGetProfitsPerDate = async (req: UserRequest, res: Response) => {
  try {
    const profitsAndRevenue = await biDal.getProfitsPerMonth()
    return res.json(profitsAndRevenue).status(200);
  } catch (error) {
    handleError(res, error, 500);
  }
};

const handelGetTopProfitableProducts = async (req: UserRequest, res: Response) => {
  try {
    const month: number = Number(req.query?.month) || new Date().getMonth()
    const topProfitableProductForMonth = await biDal.getTopProfitableProducts(month)
    return res.json(topProfitableProductForMonth).status(200);
  } catch (error) {
    handleError(res, error, 500);
  }
};

export default {handelBi, handelGetOrdersPlacedPerDate, handelGetProfitsPerDate, handelGetTopProfitableProducts}