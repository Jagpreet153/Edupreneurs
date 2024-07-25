// import Chatbot from "./chatbot/chatbot";

export const cards = [
  {
    className: "ClassName1",
    dateStart: "11/22/3333",
    ownerName: "OwnerName1",
  },
  {
    className: "ClassName2",
    dateStart: "12/23/3443",
    ownerName: "OwnerName2",
  },
  {
    className: "ClassName3",
    dateStart: "13/24/5323",
    ownerName: "OwnerName3",
  },
  {
    className: "ClassName4",
    dateStart: "15/25/3355",
    ownerName: "OwnerName4",
  },
  {
    className: "ClassName5",
    dateStart: "16/26/3366",
    ownerName: "OwnerName5",
  },
];

function Dashboard() {
  return (
    <div>
      {/* <Chatbot /> */}
      <div className="p-8">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4`}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="card flex-auto z-0 bg-secondary text-neutral-content"
            >
              <div className="card-body items-center text-center">
                <h2 className="card-title"> {card.className} </h2>
                <p>{card.dateStart}</p>
                <p>{card.ownerName}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Open</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
