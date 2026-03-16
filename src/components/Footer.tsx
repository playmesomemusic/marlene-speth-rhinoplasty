import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-xl mb-4">Dr. med. Marlene Speth</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed font-body">
              Consultant in Otolaryngology (ENT) at Technical University of Munich, 
              specialising in rhinology and facial plastic surgery.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Procedures</h4>
            <ul className="space-y-2 text-sm font-body text-primary-foreground/70">
              <li><Link to="/septorhinoplasty" className="hover:text-gold transition-colors">Septorhinoplasty</Link></li>
              <li><Link to="/septoplasty" className="hover:text-gold transition-colors">Septoplasty</Link></li>
              <li><Link to="/sinus-surgery" className="hover:text-gold transition-colors">Sinus Surgery</Link></li>
              <li><Link to="/turbinate-surgery" className="hover:text-gold transition-colors">Turbinate Surgery</Link></li>
              <li><Link to="/skull-base" className="hover:text-gold transition-colors">Skull Base Surgery</Link></li>
              <li><Link to="/revision-cases" className="hover:text-gold transition-colors">Revision Cases</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <div className="text-sm font-body text-primary-foreground/70 space-y-2">
              <p>Klinikum rechts der Isar</p>
              <p>Technical University of Munich</p>
              <p>Ismaninger Str. 22</p>
              <p>81675 München</p>
              <div className="mt-4 pt-4 border-t border-primary-foreground/20">
                <Link to="/contact" className="text-gold hover:text-gold-light transition-colors font-medium">
                  Book a Consultation →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50 font-body">
          <p>© {new Date().getFullYear()} Dr. med. Marlene Speth. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/imprint" className="hover:text-primary-foreground/80 transition-colors">Imprint</Link>
            <Link to="/privacy" className="hover:text-primary-foreground/80 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
