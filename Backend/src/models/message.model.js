import mogoose from "mongoose";

const messageSchema = new mogoose.Schema(
  {
    senderId: {
      type: mogoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mogoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Message = mogoose.model("Message", messageSchema);

export default Message;
