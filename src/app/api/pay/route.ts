import payload from "@/revio-payload.json" assert { type: "json" };
import { RevioResponse } from "@/app/types";
import { AxiosResponse } from "axios";
import revio from "@/revio";

export async function GET() {

  const res: AxiosResponse<RevioResponse> = await revio({
    method: "POST",
    url: "purchases/",
    data: payload,
  });

  return Response.json({ "checkout_url": res.data.checkout_url });
}
