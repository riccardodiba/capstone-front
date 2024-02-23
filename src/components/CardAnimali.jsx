import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import abruzzese from '../assest/abruzzese.jpg';
import australian from '../assest/australian.jpg';
import bulldog from '../assest/bulldog.jpg';
import golden from '../assest/golden.jpg';
import husky from '../assest/husky.jpg';
import tedesco from '../assest/tedesco.jpg'


function CardAnimali() {
  return (
    
    <Row>
      <Col>
        <Card className="mb-5 mt-5 img-fluid"  >
          <Card.Img variant="top" src={abruzzese}  />
          <Card.Body>
            <Card.Title>JOKER</Card.Title>
            <Card.Text>
              Pastore Abbruzzese
            </Card.Text>
            <Card.Text>
              Il Pastore Abruzzese, noto anche come Maremmano-Abruzzese, è una razza di cane da pastore originaria delle regioni italiane dell'Abruzzo e della Maremma. È un cane da lavoro tradizionalmente utilizzato per proteggere il bestiame da predatori come lupi e orsi nelle zone rurali e montane dell'Italia centrale.

Questi cani sono noti per la loro stazza imponente e per il loro aspetto fiero e maestoso. Hanno una pelliccia folta e doppia che li protegge dalle intemperie e li aiuta a mimetizzarsi nell'ambiente circostante durante il lavoro. Il mantello è generalmente bianco, anche se possono esserci sfumature di crema o grigio pallido.

In termini di temperamento, il Pastore Abruzzese è un cane coraggioso, leale e protettivo. Sono instancabili lavoratori e sono noti per la loro forte dedizione al gregge che proteggono. Tuttavia, possono anche essere gentili e affettuosi con la famiglia e con coloro che conoscono bene.

Questi cani richiedono una socializzazione precoce e una formazione coerente per sviluppare un comportamento equilibrato. Sono generalmente adatti a vivere in spazi aperti e hanno bisogno di molto esercizio fisico e di uno scopo lavorativo per essere felici e sani.

Il Pastore Abruzzese è una razza storica e venerata in Italia, e continua a essere apprezzata per le sue capacità di pastore e per il suo carattere affidabile e devoto.
            </Card.Text>
            <Button className='text-black' style={{backgroundColor:'#adff2f', textAlign:'center', }}>Adotta</Button>
          </Card.Body>
        </Card>
        <Card className="mb-5 mt-5 img-fluid" >
          <Card.Img variant="top" src={australian} />
          <Card.Body>
            <Card.Title>LUNA</Card.Title>
            <Card.Text>
            Australian Terrier
            </Card.Text>
            <Card.Text>
           L'Australian Terrier è una razza di cane originaria dell'Australia, nota per la sua statura robusta e il suo aspetto fiero. Con il suo mantello ruvido e la testa proporzionata al corpo, incarna l'essenza della forza e della determinazione. Le sue orecchie erette e il mantello colorato aggiungono un tocco di vivacità alla sua presenza maestosa.

Caratterizzato da una personalità intraprendente e coraggiosa, l'Australian Terrier è un compagno di lavoro instancabile e leale. È noto per il suo spirito indomabile e il suo forte legame con il suo gregge o la sua famiglia. La sua presenza assertiva e protettiva lo rende un guardiano affidabile, pronto a difendere il suo territorio e i suoi cari da qualsiasi minaccia.

Tuttavia, dietro la sua natura audace si nasconde un cuore affettuoso e devoto. L'Australian Terrier è un compagno di vita fedele e affettuoso, pronto a condividere gioie e avventure con la sua famiglia umana. Con il suo spirito giocoso e la sua intelligenza vivace, è sempre pronto per una nuova sfida o un'attività che stimoli la sua mente.

In sintesi, l'Australian Terrier incarna la combinazione perfetta di forza, lealtà e amore. È un compagno instancabile e devoto che porta gioia e vitalità ovunque vada.
            </Card.Text>
                       <Button className='text-black' style={{backgroundColor:'#adff2f', textAlign:'center', }}>Adotta</Button>

          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mb-5  mt-5 img fluid"  >
          <Card.Img variant="top" src={bulldog}  />
          <Card.Body>
            <Card.Title>ROCKY</Card.Title>
            <Card.Text>
             Bulldog
            </Card.Text>
              <Card.Text>
            Il Bulldog, noto anche come Bulldog Inglese, è una razza di cane dal temperamento tranquillo e dall'aspetto distintivo. Originaria dell'Inghilterra, questa razza è conosciuta per la sua stazza robusta, la testa massiccia e il muso corto.

Il Bulldog è caratterizzato da una muscolatura potente, soprattutto nella regione delle spalle, che gli conferisce un'aria di forza e solidità. Ha un mantello corto e liscio, generalmente di colore bianco con macchie o fulvo chiaro.

Dal punto di vista del temperamento, il Bulldog è noto per essere un cane affettuoso, leale e docile. È generalmente amichevole con le persone, compresi i bambini, e si adatta bene alla vita familiare. Tuttavia, può essere testardo a volte e richiede una guida ferma ma amorevole durante l'addestramento.

Nonostante la sua natura pacifica, il Bulldog è un cane coraggioso e protettivo nei confronti della sua famiglia e del suo territorio. Anche se non è particolarmente attivo, ha bisogno di esercizio moderato per mantenere una buona salute.
            </Card.Text>
                        <Button className='text-black' style={{backgroundColor:'#adff2f', textAlign:'center', }}>Adotta</Button>

          </Card.Body>
        </Card>
        <Card className="mb-5 mt-5"  >
          <Card.Img variant="top" src={golden} />
          <Card.Body>
            <Card.Title>ATHENA</Card.Title>
            <Card.Text>
              Golden Retriever
            </Card.Text>
              <Card.Text>
              Il Golden Retriever è una razza di cane estremamente popolare e amata per il suo carattere affettuoso, leale e socievole. Questi cani hanno una personalità giocosa e amichevole, rendendoli eccellenti compagni di famiglia e animali domestici. Sono noti per la loro intelligenza e facilità di addestramento, rendendoli ideali per una varietà di compiti, tra cui lavoro da guida per non vedenti, ricerca e salvataggio, e come animali da terapia. Il Golden Retriever ha anche un mantello lussuoso, generalmente di colore dorato, che richiede una certa manutenzione per mantenerlo pulito e sano. In generale, il Golden Retriever è un cane estremamente amorevole e devoto che porta gioia e felicità a chiunque abbia il privilegio di condividere la propria vita con uno di questi meravigliosi animali.
            </Card.Text>
                       <Button className='text-black' style={{backgroundColor:'#adff2f', textAlign:'center', }}>Adotta</Button>

          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mb-5 mt-5" style={{ width: '100%' }}>
          <Card.Img variant="top" src={husky} />
          <Card.Body>
            <Card.Title>Thor</Card.Title>
            <Card.Text>
              Husky Siberiano
            </Card.Text>
            <Card.Text>
              
Il Husky Siberiano è una razza di cane originaria della Siberia orientale, famosa per la sua bellezza maestosa e la sua resistenza. Questi cani sono noti per il loro mantello spesso e folto, che li protegge dalle rigide temperature artiche. Hanno occhi vivaci e azzurri o marroni, che aggiungono un tocco di fascino al loro aspetto.

Dal punto di vista del temperamento, i Husky Siberiani sono energici, socievoli e avventurosi. Sono cani estremamente amichevoli con le persone e con altri cani, rendendoli eccellenti compagni per le famiglie attive e dinamiche. Tuttavia, possono essere anche indipendenti e testardi, il che richiede una certa pazienza e coerenza nell'addestramento.

I Husky Siberiani sono noti per la loro propensione alla corsa e alla trazione, e sono spesso utilizzati come cani da slitta nelle regioni settentrionali. Sono anche molto attivi e hanno bisogno di molto esercizio fisico per soddisfare il loro bisogno di stimolazione mentale e fisica.
            </Card.Text>
                     <Button className='text-black' style={{backgroundColor:'#adff2f', textAlign:'center', }}>Adotta</Button>

          </Card.Body>
        </Card>
        <Card className="mb-5 mt-5" style={{ width: '100%' }}>
          <Card.Img variant="top" src={tedesco} />
          <Card.Body>
            <Card.Title>WENDY</Card.Title>
            <Card.Text>
              Pastore Tedesco
            </Card.Text>
            <Card.Text>
              
Il Pastore Tedesco è una razza di cane conosciuta per la sua intelligenza, lealtà e versatilità. Questi cani sono originariamente stati allevati per il lavoro di pastore, ma sono diventati popolari anche come animali da compagnia, cani da lavoro e cani da servizio.

Dal punto di vista fisico, il Pastore Tedesco è un cane di taglia media-grande con una struttura muscolare ben proporzionata. Hanno una testa robusta, orecchie dritte e occhi espressivi. Il loro mantello è spesso e doppio strato, con una varietà di colori tra cui nero e focato, nero e marrone, e sable.

Dal punto di vista del temperamento, i Pastori Tedeschi sono noti per essere intelligenti, coraggiosi e devoti ai loro proprietari. Sono molto protettivi della loro famiglia e del loro territorio, il che li rende ottimi cani da guardia. Sono anche estremamente addestrabili e versatili, capaci di eccellere in una varietà di compiti, tra cui il lavoro di polizia, la ricerca e il soccorso, l'agilità e molto altro.

I Pastori Tedeschi richiedono un'esercizio regolare e una stimolazione mentale per mantenerli felici e sani. Sono molto legati alla loro famiglia e amano partecipare alle attività quotidiane. Con una corretta socializzazione e addestramento, sono cani devoti e affettuosi che portano molta gioia alla vita dei loro proprietari.
            </Card.Text>
                      <Button className='text-black' style={{backgroundColor:'#adff2f', textAlign:'center', }}>Adotta</Button>

          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CardAnimali;
