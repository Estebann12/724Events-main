import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import EventList from "../../containers/Events";
import EventCard from "../../components/EventCard";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Envoyer");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<EventList />)
    screen.findByText("conférence");
    screen.findByText("AVRIL");
    screen.findByText("User&Product MixUsers");
  })
  it("a list a people is displayed", async () => {
      render(<Home/>);
      const peopleCard = screen.getByTestId("PeoplesContainerTest");
      expect(peopleCard).toBeInTheDocument();
      screen.findByText("Notre équipe");
      screen.findByText("Une équipe d’experts dédiés à l’ogranisation de vos événements");
  })
  it("a footer is displayed", async () => {
      render(<Home />);
      screen.findByTitle("Contactez-nous");
      screen.findByText("45 avenue de la République, 75000 Paris");
      screen.findByText("01 23 45 67 89");
      screen.findByText("contact@77events.com");

  })
  it("an event card, with the last event, is displayed", () => {
      render(<EventCard 
        title="Conférence #productCON"
        date={new Date('2022-08-29T20:28:45.744Z')}
        imageSrc="/images/headway-F2KRf_QfCqw-unsplash.png"
        label="boom"
      />)

      const titleElement = screen.getByText('Conférence #productCON');
      const dateElement = screen.getByText(/août/);

      expect(titleElement).toBeInTheDocument();
      expect(dateElement).toBeInTheDocument();

  })
});
