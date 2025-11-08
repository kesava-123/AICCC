import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MapDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const mapData: Record<string, any> = {
    "amaravati-master-plan": {
      title: "Amaravati Master Plan",
      images: [
        "https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=800&fit=crop",
      ],
      description: "The Amaravati Master Plan represents a comprehensive urban planning framework designed to create a world-class capital city. The plan encompasses residential zones, commercial districts, government complexes, and recreational areas, all integrated with green corridors and sustainable infrastructure.",
      features: [
        "Total area: 217 sq km of planned development",
        "Mixed-use zoning for optimal land utilization",
        "Green belt and ecological preservation zones",
        "Integrated transportation network",
        "Smart city infrastructure backbone",
      ],
      specifications: "Scale: 1:50,000 | Projection: WGS84 | Year: 2024",
    },
    "connectivity": {
      title: "Connectivity Network",
      images: [
        "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1502101872923-d48509bff386?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=800&fit=crop",
      ],
      description: "The connectivity infrastructure ensures seamless movement across the capital city with a hierarchical road network. Primary arterials connect major districts, while secondary roads provide access to neighborhoods and tertiary roads serve local areas.",
      features: [
        "8-lane expressways connecting to major highways",
        "Ring roads for efficient traffic distribution",
        "Grade-separated junctions at major intersections",
        "Dedicated bicycle lanes and pedestrian pathways",
        "Integration with metro and bus rapid transit",
      ],
      specifications: "Total Road Length: 850 km | Lane Width: 3.5m-3.75m | Design Speed: 60-100 kmph",
    },
    "traffic-transportation": {
      title: "Traffic & Transportation",
      images: [
        "https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop",
      ],
      description: "Comprehensive traffic management and public transportation system designed to minimize congestion and provide sustainable mobility options. The system integrates intelligent traffic signals, real-time monitoring, and multi-modal transport facilities.",
      features: [
        "Metro rail network covering major corridors",
        "Bus Rapid Transit System (BRTS) with dedicated lanes",
        "Intelligent Traffic Management System (ITMS)",
        "Park-and-ride facilities at transit hubs",
        "Electric vehicle charging infrastructure",
      ],
      specifications: "Metro Length: 50 km (Phase I) | Bus Stops: 200+ | Traffic Signals: 150+ ITS-enabled",
    },
    "water-supply": {
      title: "Water Supply & Fire Fighting System",
      images: [
        "https://images.unsplash.com/photo-1581093458791-9d42e44dc5c0?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1572537336334-7caac4754a58?w=1200&h=800&fit=crop",
      ],
      description: "Integrated water supply network with dual systems for potable water and fire fighting. The infrastructure includes water treatment plants, overhead reservoirs, and a comprehensive distribution network ensuring 24/7 supply.",
      features: [
        "Water Treatment Plant capacity: 200 MLD",
        "Distribution network: 750 km of pipelines",
        "Fire hydrants at 100m intervals on major roads",
        "Underground reservoirs for emergency backup",
        "SCADA system for real-time monitoring",
      ],
      specifications: "Supply: 150 LPCD | Pressure: 10-17m | Fire Flow: 40-80 LPS per hydrant",
    },
    "water-waste": {
      title: "Water Waste Management",
      images: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1581092918484-8313e1f6c196?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1200&h=800&fit=crop",
      ],
      description: "Modern sewerage system with Sewage Treatment Plants (STPs) ensuring environmental sustainability. The system includes separate sewers for domestic and industrial wastewater with tertiary treatment for water recycling.",
      features: [
        "Underground gravity sewer network: 680 km",
        "Sewage Treatment Plants: 150 MLD capacity",
        "Tertiary treatment for reuse in landscaping",
        "Pumping stations with backup power",
        "Odor control and monitoring systems",
      ],
      specifications: "Collection: Separate System | Treatment: Extended Aeration + Tertiary | Reuse: 40%",
    },
    "storm-water": {
      title: "Storm Water Management",
      images: [
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1580407196238-dac33f57c410?w=1200&h=800&fit=crop",
      ],
      description: "Comprehensive storm drainage system designed for 1-in-50-year rainfall events. The network includes roadside drains, underground culverts, retention basins, and flood control structures.",
      features: [
        "Storm drain network: 500 km",
        "Retention basins with 5 million cubic meters capacity",
        "Permeable pavements in low-traffic areas",
        "Bio-swales for natural filtration",
        "Real-time flood monitoring system",
      ],
      specifications: "Design Storm: 50-year return period | Runoff Coefficient: 0.6-0.8 | Drainage Time: <30 min",
    },
    "power": {
      title: "Power Distribution Network",
      images: [
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1509390144985-428b50e5017f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1548613053-22087dd8eaa8?w=1200&h=800&fit=crop",
      ],
      description: "Reliable electrical distribution system with underground cabling in core areas and overhead lines in peripheral zones. The network is designed for 99.9% uptime with redundant supply paths.",
      features: [
        "Grid substations: 132/33 kV capacity",
        "Distribution substations: 33/11 kV",
        "Smart meters for all consumers",
        "Underground cabling in city center",
        "Integration with renewable energy sources",
      ],
      specifications: "Total Load: 800 MW | Voltage: 11/33/132 kV | Loss Target: <8%",
    },
    "solid-waste": {
      title: "Solid Waste Management",
      images: [
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=1200&h=800&fit=crop",
      ],
      description: "Integrated waste management system with source segregation, collection, processing, and disposal. The system includes waste-to-energy plants and material recovery facilities.",
      features: [
        "Door-to-door collection system",
        "Waste-to-energy plant: 10 MW capacity",
        "Material Recovery Facility for recyclables",
        "Composting plant for organic waste",
        "Sanitary landfill for residual waste",
      ],
      specifications: "Generation: 500 TPD | Recovery: 60% | WTE Capacity: 300 TPD | Landfill: 20%",
    },
    "gas-distribution": {
      title: "Gas Distribution Network",
      images: [
        "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1504006833117-8886a355efbf?w=1200&h=800&fit=crop",
      ],
      description: "Safe and efficient natural gas distribution network for residential, commercial, and industrial consumers. The system includes pressure regulation stations and leak detection systems.",
      features: [
        "City Gate Station: 20,000 SCMD capacity",
        "Medium pressure network: 4-7 kg/cm²",
        "Low pressure distribution: 21 mbar",
        "SCADA monitoring for leak detection",
        "Emergency shut-off valves at strategic points",
      ],
      specifications: "Network Length: 250 km | Connections: 50,000+ | Supply Pressure: 4-7 kg/cm²",
    },
    "ict": {
      title: "ICT Infrastructure",
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop",
      ],
      description: "Advanced ICT infrastructure supporting smart city operations with fiber optic backbone, data centers, and IoT sensor networks. The system enables real-time city management and citizen services.",
      features: [
        "Fiber optic network: 1,000 km",
        "Tier III Data Centers with redundancy",
        "City-wide WiFi in public spaces",
        "IoT sensor network for city operations",
        "Integrated Command and Control Center",
      ],
      specifications: "Bandwidth: 10 Gbps backbone | WiFi Hotspots: 500+ | IoT Sensors: 10,000+",
    },
    "district-cooling": {
      title: "District Cooling System",
      images: [
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1545259742-14c3c2e85a82?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop",
      ],
      description: "Energy-efficient centralized cooling system serving commercial and government buildings. The system reduces individual building energy consumption by 30-40% compared to conventional HVAC.",
      features: [
        "Central cooling plant: 50,000 TR capacity",
        "Chilled water distribution network",
        "Energy Transfer Stations in buildings",
        "Thermal energy storage for peak shaving",
        "SCADA monitoring and optimization",
      ],
      specifications: "Capacity: 50,000 TR | Distribution: 25 km network | Efficiency: COP 5.5+",
    },
    "safety-security": {
      title: "Safety & Security Systems",
      images: [
        "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1560930950-5cc20e80e392?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?w=1200&h=800&fit=crop",
      ],
      description: "Comprehensive public safety infrastructure with CCTV surveillance, emergency call boxes, and integrated emergency response systems. The network ensures citizen safety 24/7.",
      features: [
        "CCTV cameras: 2,000+ networked units",
        "Emergency call boxes at 500m intervals",
        "Integrated Command and Control Center",
        "Police stations and fire stations network",
        "Automated Number Plate Recognition (ANPR)",
      ],
      specifications: "CCTV Coverage: 90% of public areas | Response Time: <5 minutes | Monitoring: 24/7",
    },
    "disaster-management": {
      title: "Disaster Management Infrastructure",
      images: [
        "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1562601579-599dec564e06?w=1200&h=800&fit=crop",
      ],
      description: "Comprehensive disaster preparedness and response infrastructure including early warning systems, evacuation routes, emergency shelters, and relief supply storage.",
      features: [
        "Early Warning System for floods and storms",
        "Designated evacuation routes and assembly points",
        "Emergency shelters: 50 locations",
        "Relief supply warehouses strategically placed",
        "Emergency Operations Center with backup power",
      ],
      specifications: "Shelter Capacity: 100,000 persons | Evacuation Routes: 15 primary corridors",
    },
    "green-spaces": {
      title: "Green Spaces & Parks",
      images: [
        "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=800&fit=crop",
      ],
      description: "Extensive network of parks, gardens, and recreational spaces ensuring 15% green cover. The system includes neighborhood parks, district parks, and a central urban forest.",
      features: [
        "Central Park: 100 hectares with water bodies",
        "Neighborhood parks within 500m of all residences",
        "Green corridors along major roads",
        "Botanical gardens and arboretum",
        "Sports complexes and playgrounds",
      ],
      specifications: "Total Green Space: 3,000 hectares | Trees Planted: 500,000+ | Park Access: 500m radius",
    },
    "social-infrastructure": {
      title: "Social Infrastructure",
      images: [
        "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop",
      ],
      description: "Strategic distribution of schools, hospitals, community centers, and public facilities ensuring equitable access. The planning follows international standards for service delivery.",
      features: [
        "Primary schools within 500m of all residences",
        "Secondary schools at 1 km intervals",
        "Multi-specialty hospitals: 5,000 beds",
        "Community centers in each neighborhood",
        "Public libraries and cultural centers",
      ],
      specifications: "Schools: 200+ | Hospitals: 20+ (500 beds each) | Community Centers: 50+",
    },
  };

  const currentMap = mapData[id || ""];
  const allMapIds = Object.keys(mapData);
  const currentIndex = allMapIds.indexOf(id || "");
  const prevMapId = currentIndex > 0 ? allMapIds[currentIndex - 1] : null;
  const nextMapId = currentIndex < allMapIds.length - 1 ? allMapIds[currentIndex + 1] : null;

  if (!currentMap) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Map Not Found</h1>
          <Link to="/maps">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Maps
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : currentMap.images.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < currentMap.images.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/maps">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Maps
            </Button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            <GlassCard>
              <h1 className="text-3xl font-bold mb-4">{currentMap.title}</h1>
              <p className="text-muted-foreground mb-6">{currentMap.description}</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Features:</h3>
                  <ul className="space-y-2">
                    {currentMap.features.map((feature: string, index: number) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">{currentMap.specifications}</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="font-semibold mb-3">Navigation</h3>
              <div className="space-y-2">
                {prevMapId && (
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => navigate(`/maps/${prevMapId}`)}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous Map
                  </Button>
                )}
                {nextMapId && (
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => navigate(`/maps/${nextMapId}`)}
                  >
                    Next Map
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-0 overflow-hidden">
              <div className="relative aspect-video bg-muted">
                <img
                  src={currentMap.images[currentImageIndex]}
                  alt={`${currentMap.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://placehold.co/1200x800?text=Map+Image";
                  }}
                />

                {currentMap.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {currentMap.images.map((_: any, index: number) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition ${
                            index === currentImageIndex
                              ? "bg-primary w-6"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="p-6">
                <p className="text-sm text-muted-foreground text-center">
                  Image {currentImageIndex + 1} of {currentMap.images.length} | Click arrows to navigate through images
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default MapDetail;
