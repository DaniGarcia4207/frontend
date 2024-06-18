
package principal;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.GridLayout;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.IOException;
import java.net.URL;
import javax.imageio.ImageIO;
import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.border.Border;

public class Digimon extends javax.swing.JFrame {
Consumo consumoAPPI = new Consumo();
JLabel [] etqImagenes;
JButton[] botones;
JButton[] botonesPrincipales;
int i=0;
int a = -1;
int b = 0;
int c=0;
int cont=3;
boolean numerosAscendentes=true;
String respAppi = consumoAPPI.consumoGET("https://digi-api.com/api/v1/digimon");
String descripcion;
public Descripcion ventanaSecundaria;
    public Digimon() {
        initComponents();
        initAlternComponents();
        ponerImagenes(respAppi);
        paginador();
        btnPrevius.setEnabled(false);
    }
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        panelDetalle = new javax.swing.JPanel();
        etqNombreDigimon = new javax.swing.JLabel();
        btnDescripcion = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        etqNivel = new javax.swing.JLabel();
        etqAtributos = new javax.swing.JLabel();
        etqTipo = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        panelCampos = new javax.swing.JPanel();
        panelPokemones = new javax.swing.JPanel();
        etq2 = new javax.swing.JLabel();
        etq3 = new javax.swing.JLabel();
        etq4 = new javax.swing.JLabel();
        etq5 = new javax.swing.JLabel();
        etq1 = new javax.swing.JLabel();
        panelPaginador = new javax.swing.JPanel();
        btnPrevius = new javax.swing.JButton();
        btnPrimeraPagina = new javax.swing.JButton();
        btn3 = new javax.swing.JButton();
        btn1 = new javax.swing.JButton();
        btn4 = new javax.swing.JButton();
        btn5 = new javax.swing.JButton();
        btn6 = new javax.swing.JButton();
        btn7 = new javax.swing.JButton();
        btnUltimaPagina = new javax.swing.JButton();
        btnNext = new javax.swing.JButton();
        btn2 = new javax.swing.JButton();
        panelTitulo = new javax.swing.JPanel();
        etqImagen = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        panelDetalle.setBackground(new java.awt.Color(153, 153, 153));
        panelDetalle.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(51, 153, 255), 3));

        etqNombreDigimon.setFont(new java.awt.Font("Segoe UI", 1, 24)); // NOI18N
        etqNombreDigimon.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);

        btnDescripcion.setFont(new java.awt.Font("Sylfaen", 1, 18)); // NOI18N
        btnDescripcion.setText("DESCRIPCION");
        btnDescripcion.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(51, 153, 255)));
        btnDescripcion.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnDescripcionActionPerformed(evt);
            }
        });

        jLabel1.setFont(new java.awt.Font("Sylfaen", 1, 18)); // NOI18N
        jLabel1.setText("TIPO  :");

        jLabel2.setFont(new java.awt.Font("Sylfaen", 1, 18)); // NOI18N
        jLabel2.setText("NIVEL :");

        jLabel3.setFont(new java.awt.Font("Sylfaen", 1, 18)); // NOI18N
        jLabel3.setText("ATRIBUTOS :");

        etqNivel.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        etqNivel.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);

        etqAtributos.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        etqAtributos.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);

        etqTipo.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        etqTipo.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);

        jLabel4.setFont(new java.awt.Font("Sylfaen", 1, 18)); // NOI18N
        jLabel4.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel4.setText("CAMPOS DE BATALLA");

        panelCampos.setBackground(new java.awt.Color(255, 255, 255));
        panelCampos.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(51, 153, 255), 2));

        javax.swing.GroupLayout panelCamposLayout = new javax.swing.GroupLayout(panelCampos);
        panelCampos.setLayout(panelCamposLayout);
        panelCamposLayout.setHorizontalGroup(
            panelCamposLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 0, Short.MAX_VALUE)
        );
        panelCamposLayout.setVerticalGroup(
            panelCamposLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 278, Short.MAX_VALUE)
        );

        javax.swing.GroupLayout panelDetalleLayout = new javax.swing.GroupLayout(panelDetalle);
        panelDetalle.setLayout(panelDetalleLayout);
        panelDetalleLayout.setHorizontalGroup(
            panelDetalleLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(panelDetalleLayout.createSequentialGroup()
                .addGroup(panelDetalleLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(panelDetalleLayout.createSequentialGroup()
                        .addContainerGap()
                        .addGroup(panelDetalleLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(etqNombreDigimon, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addGroup(panelDetalleLayout.createSequentialGroup()
                                .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 72, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(etqTipo, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                            .addGroup(panelDetalleLayout.createSequentialGroup()
                                .addGroup(panelDetalleLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(jLabel3)
                                    .addGroup(panelDetalleLayout.createSequentialGroup()
                                        .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 72, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                        .addComponent(etqNivel, javax.swing.GroupLayout.PREFERRED_SIZE, 171, javax.swing.GroupLayout.PREFERRED_SIZE))
                                    .addGroup(panelDetalleLayout.createSequentialGroup()
                                        .addGap(6, 6, 6)
                                        .addGroup(panelDetalleLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                            .addComponent(etqAtributos, javax.swing.GroupLayout.PREFERRED_SIZE, 243, javax.swing.GroupLayout.PREFERRED_SIZE)
                                            .addGroup(panelDetalleLayout.createSequentialGroup()
                                                .addGap(6, 6, 6)
                                                .addComponent(jLabel4, javax.swing.GroupLayout.DEFAULT_SIZE, 243, Short.MAX_VALUE)))))
                                .addGap(0, 3, Short.MAX_VALUE))))
                    .addGroup(panelDetalleLayout.createSequentialGroup()
                        .addContainerGap()
                        .addComponent(panelCampos, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
                .addContainerGap())
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, panelDetalleLayout.createSequentialGroup()
                .addGap(0, 0, Short.MAX_VALUE)
                .addComponent(btnDescripcion, javax.swing.GroupLayout.PREFERRED_SIZE, 176, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(44, 44, 44))
        );
        panelDetalleLayout.setVerticalGroup(
            panelDetalleLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(panelDetalleLayout.createSequentialGroup()
                .addContainerGap()
                .addComponent(etqNombreDigimon, javax.swing.GroupLayout.PREFERRED_SIZE, 54, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btnDescripcion, javax.swing.GroupLayout.PREFERRED_SIZE, 32, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(5, 5, 5)
                .addGroup(panelDetalleLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, 31, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(etqNivel))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(panelDetalleLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 31, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(etqTipo))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jLabel3, javax.swing.GroupLayout.PREFERRED_SIZE, 31, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(etqAtributos, javax.swing.GroupLayout.PREFERRED_SIZE, 33, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jLabel4)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(panelCampos, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addContainerGap())
        );

        panelPokemones.setBackground(new java.awt.Color(153, 204, 255));

        etq2.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        etq2.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0), 2));
        etq2.setName("2"); // NOI18N

        etq3.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        etq3.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0), 2));
        etq3.setName("3"); // NOI18N

        etq4.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        etq4.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0), 2));
        etq4.setName("4"); // NOI18N

        etq5.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        etq5.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0), 2));
        etq5.setName("5"); // NOI18N

        etq1.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        etq1.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0), 2));
        etq1.setName("1"); // NOI18N

        javax.swing.GroupLayout panelPokemonesLayout = new javax.swing.GroupLayout(panelPokemones);
        panelPokemones.setLayout(panelPokemonesLayout);
        panelPokemonesLayout.setHorizontalGroup(
            panelPokemonesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, panelPokemonesLayout.createSequentialGroup()
                .addContainerGap()
                .addComponent(etq1, javax.swing.GroupLayout.PREFERRED_SIZE, 165, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(etq2, javax.swing.GroupLayout.PREFERRED_SIZE, 165, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(etq3, javax.swing.GroupLayout.PREFERRED_SIZE, 171, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap())
            .addGroup(panelPokemonesLayout.createSequentialGroup()
                .addGap(81, 81, 81)
                .addComponent(etq4, javax.swing.GroupLayout.PREFERRED_SIZE, 172, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(etq5, javax.swing.GroupLayout.PREFERRED_SIZE, 171, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        panelPokemonesLayout.setVerticalGroup(
            panelPokemonesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(panelPokemonesLayout.createSequentialGroup()
                .addContainerGap()
                .addGroup(panelPokemonesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(etq2, javax.swing.GroupLayout.PREFERRED_SIZE, 175, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(etq3, javax.swing.GroupLayout.PREFERRED_SIZE, 175, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(etq1, javax.swing.GroupLayout.PREFERRED_SIZE, 175, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(panelPokemonesLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(etq4, javax.swing.GroupLayout.PREFERRED_SIZE, 175, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(etq5, javax.swing.GroupLayout.PREFERRED_SIZE, 175, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        panelPaginador.setBackground(new java.awt.Color(51, 51, 51));

        btnPrevius.setFont(new java.awt.Font("Segoe UI", 1, 12)); // NOI18N
        btnPrevius.setText("<");
        btnPrevius.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnPreviusActionPerformed(evt);
            }
        });

        btnPrimeraPagina.setFont(new java.awt.Font("Segoe UI", 1, 12)); // NOI18N
        btnPrimeraPagina.setText("<<");
        btnPrimeraPagina.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnPrimeraPaginaActionPerformed(evt);
            }
        });

        btn3.setFont(new java.awt.Font("Segoe UI", 1, 12)); // NOI18N
        btn3.setText("3");

        btn1.setFont(new java.awt.Font("Segoe UI", 1, 12)); // NOI18N
        btn1.setText("1");

        btn4.setFont(new java.awt.Font("Segoe UI", 1, 12)); // NOI18N
        btn4.setText("4");

        btn5.setFont(new java.awt.Font("Segoe UI", 1, 12)); // NOI18N
        btn5.setText("5");

        btn6.setFont(new java.awt.Font("Segoe UI", 1, 12)); // NOI18N
        btn6.setText("6");
        btn6.setActionCommand("");

        btn7.setFont(new java.awt.Font("Segoe UI", 1, 12)); // NOI18N
        btn7.setText("7");

        btnUltimaPagina.setFont(new java.awt.Font("Segoe UI", 1, 12)); // NOI18N
        btnUltimaPagina.setText(">>");
        btnUltimaPagina.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnUltimaPaginaActionPerformed(evt);
            }
        });

        btnNext.setFont(new java.awt.Font("Segoe UI", 3, 12)); // NOI18N
        btnNext.setText(">");
        btnNext.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnNextActionPerformed(evt);
            }
        });

        btn2.setFont(new java.awt.Font("Segoe UI", 1, 12)); // NOI18N
        btn2.setText("2");

        javax.swing.GroupLayout panelPaginadorLayout = new javax.swing.GroupLayout(panelPaginador);
        panelPaginador.setLayout(panelPaginadorLayout);
        panelPaginadorLayout.setHorizontalGroup(
            panelPaginadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(panelPaginadorLayout.createSequentialGroup()
                .addContainerGap()
                .addComponent(btnPrimeraPagina, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btnPrevius, javax.swing.GroupLayout.PREFERRED_SIZE, 38, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btn1, javax.swing.GroupLayout.PREFERRED_SIZE, 38, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btn2, javax.swing.GroupLayout.PREFERRED_SIZE, 38, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(8, 8, 8)
                .addComponent(btn3, javax.swing.GroupLayout.PREFERRED_SIZE, 38, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btn4, javax.swing.GroupLayout.PREFERRED_SIZE, 38, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btn5, javax.swing.GroupLayout.PREFERRED_SIZE, 38, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btn6, javax.swing.GroupLayout.PREFERRED_SIZE, 39, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btn7, javax.swing.GroupLayout.PREFERRED_SIZE, 39, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btnNext, javax.swing.GroupLayout.PREFERRED_SIZE, 38, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btnUltimaPagina, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        panelPaginadorLayout.setVerticalGroup(
            panelPaginadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(panelPaginadorLayout.createSequentialGroup()
                .addGap(18, 18, 18)
                .addGroup(panelPaginadorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btnPrimeraPagina, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btnPrevius, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btn1, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btn3, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btn4, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btn5, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btn6, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btn7, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btnUltimaPagina, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btnNext, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btn2, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(16, Short.MAX_VALUE))
        );

        panelTitulo.setBackground(new java.awt.Color(81, 164, 234));

        etqImagen.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);

        javax.swing.GroupLayout panelTituloLayout = new javax.swing.GroupLayout(panelTitulo);
        panelTitulo.setLayout(panelTituloLayout);
        panelTituloLayout.setHorizontalGroup(
            panelTituloLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(panelTituloLayout.createSequentialGroup()
                .addGap(95, 95, 95)
                .addComponent(etqImagen, javax.swing.GroupLayout.PREFERRED_SIZE, 361, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        panelTituloLayout.setVerticalGroup(
            panelTituloLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(panelTituloLayout.createSequentialGroup()
                .addComponent(etqImagen, javax.swing.GroupLayout.PREFERRED_SIZE, 131, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(panelPaginador, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(panelPokemones, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(panelTitulo, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(panelDetalle, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(panelDetalle, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(javax.swing.GroupLayout.Alignment.LEADING, layout.createSequentialGroup()
                        .addComponent(panelTitulo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(panelPokemones, javax.swing.GroupLayout.PREFERRED_SIZE, 363, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(panelPaginador, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents
    public void initAlternComponents(){
        etqImagenes = new JLabel []{etq1,etq2,etq3,etq4,etq5};
        botones = new JButton[]{btn1,btn2,btn3,btn4,btn5,btn6,btn7};
        botonesPrincipales = new JButton[]{btnPrimeraPagina,btnUltimaPagina,btnNext,btnPrevius};
        setVisible(true);
        setLocationRelativeTo(null);
        
        Image iconoDigimon = getToolkit().createImage(ClassLoader.getSystemResource("imagenes/digimones.jpg"));
        iconoDigimon = iconoDigimon.getScaledInstance(250,110,Image.SCALE_SMOOTH);
        etqImagen.setIcon(new ImageIcon(iconoDigimon));
        for(int i=0;i<botones.length;i++){
            Border paddingBorder = BorderFactory.createEmptyBorder(0, 0, 0, 0);
            botones[i].setBorder(paddingBorder);
            if(i<4){
                botonesPrincipales[i].setBorder(paddingBorder);
            }
        }
    }  
    public static ImageIcon createImageIcon(String imageUrl) {
        try {
            // Leer la imagen desde la URL
            URL url = new URL(imageUrl);
            Image image = ImageIO.read(url);
            // Escalar la imagen para que se ajuste al JLabel
            Image scaledImage = image.getScaledInstance(190, 190, Image.SCALE_SMOOTH);
            return new ImageIcon(scaledImage);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
    public static ImageIcon createImageCampos(String imageUrl) {
        try {
            // Leer la imagen desde la URL
            URL url = new URL(imageUrl);
            Image image = ImageIO.read(url);
            // Escalar la imagen para que se ajuste al JLabel
            Image scaledImage = image.getScaledInstance(60, 60, Image.SCALE_SMOOTH);
            return new ImageIcon(scaledImage);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
    public void camposBatalla(JsonObject detalle){
      panelCampos.removeAll();
      JsonArray fields = detalle.getAsJsonArray("fields");
        for (JsonElement element : fields) {
            JsonObject levelObject = element.getAsJsonObject();
            String nombreCampo = levelObject.get("field").getAsString();
            String imagenCampo = levelObject.get("image").getAsString();
            ImageIcon campoIcono = createImageCampos(imagenCampo);
            JLabel campo = new JLabel("<html><center><b>"+nombreCampo+"</b></center></html>", campoIcono, JLabel.CENTER);
            campo.setVerticalTextPosition(JLabel.BOTTOM);
            campo.setHorizontalTextPosition(JLabel.CENTER);
            Color color = new Color(51, 153, 255);
            Border paddingBorder = BorderFactory.createEmptyBorder(10, 10, 10, 10);
            Border border = BorderFactory.createLineBorder(color);
            panelCampos.setPreferredSize(new Dimension(258, 282));
            panelCampos.setBorder(paddingBorder);
            panelCampos.setBorder(border);
            panelCampos.setLayout(new GridLayout(3, 2));
            panelCampos.add(campo);
        }
    }
    int primerPockemon=0;
    public void ponerImagenes(String respAppi){
         if (respAppi != null) {
           JsonObject objeto = JsonParser.parseString(respAppi).getAsJsonObject();
           JsonArray resultsArray = objeto.getAsJsonArray("content");
           int cont = 0;
            for (JsonElement element : resultsArray) {
               primerPockemon ++;
                JsonObject resultObject = element.getAsJsonObject();
                String imagen = resultObject.get("image").getAsString();
                //String url = resultObject.get("url").getAsString();
                ImageIcon Digimon = createImageIcon(imagen);
                etqImagenes[cont].setIcon(Digimon);
                etqImagenes[cont].addMouseListener(new MouseAdapter() {
                    @Override
                    public void mouseClicked(MouseEvent e) {
                       String detalle = resultObject.get("href").getAsString();
                       String nombre = resultObject.get("name").getAsString();
                       etqNombreDigimon.setText(nombre);
                       String apiResponse2 = consumoAPPI.consumoGET(detalle);
                       JsonObject objeto2 = JsonParser.parseString(apiResponse2).getAsJsonObject();
                       JsonArray levels = objeto2.getAsJsonArray("levels");
                       JsonArray types = objeto2.getAsJsonArray("types");
                       JsonArray attributes = objeto2.getAsJsonArray("attributes");
                       JsonArray descriptions = objeto2.getAsJsonArray("descriptions");
                       for (JsonElement element : levels) {
                        JsonObject levelObject = element.getAsJsonObject();
                        String nivel = levelObject.get("level").getAsString();
                        etqNivel.setText(nivel);
                       }
                       for (JsonElement element : types) {
                        JsonObject levelObject = element.getAsJsonObject();
                        String tipo = levelObject.get("type").getAsString();
                        etqTipo.setText(tipo);
                       }
                       for (JsonElement element : attributes) {
                        JsonObject levelObject = element.getAsJsonObject();
                        String atributos = levelObject.get("attribute").getAsString();
                        etqAtributos.setText(atributos);
                       }
                       for (int i =0; i<descriptions.size();i++){
                            JsonObject levelObject = descriptions.get(1).getAsJsonObject();
                            descripcion = levelObject.get("description").getAsString();
                       }
                        btnDescripcion.addActionListener(new ActionListener(){
                        @Override
                            public void actionPerformed(ActionEvent evt){
                                if (ventanaSecundaria == null) {
                                    ventanaSecundaria = new Descripcion(objeto2);
                                    ventanaSecundaria.mostrarDescripcion(descripcion);
                                    ventanaSecundaria.setVisible(true);
                                } else {
                                    ventanaSecundaria.mostrarDescripcion(descripcion);
                                    ventanaSecundaria.setVisible(true);
                                }
                            }
                        });
                        camposBatalla(objeto2);
                    }
                });
                cont++;
            }
        } else {
        JOptionPane.showMessageDialog(null, "Error al consumir la API", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }
    private void btnPrimeraPaginaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnPrimeraPaginaActionPerformed
        btnPrevius.setEnabled(false);
        btnNext.setEnabled(true);
        int y=1;
        for(int x=0;x<botones.length;x++){
         String numeroString = String.valueOf(y);
         botones[x].setText(numeroString);
         y++;
        }
    }//GEN-LAST:event_btnPrimeraPaginaActionPerformed
    int b2=6;
    int a2=7;
    private void btnPreviusActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnPreviusActionPerformed
        if(!botones[3].getBackground().equals(Color.MAGENTA)){
            btnNext.setEnabled(false);
            c++;
            if(c<=2){
              botones[b2].setBackground(Color.WHITE);
            }else if (b2 >= 0){
                b2--;
                botones[b2].setBackground(Color.WHITE);
            }
            if(a2 >=0){
                a2--;
            }
            if (a2 == 3){
                a2=3;
            }
            botones[a2].setBackground(Color.MAGENTA);
            listaPoquemones(botones[a2]);
        }else if(botones[0].getText().equals("1")){
          btnPrevius.setEnabled(false);
        }else{
            btnPrevius.setEnabled(true);
            btnNext.setEnabled(true);
            String numeroBoton = botones[3].getText();
            int numeroEntero = Integer.parseInt(numeroBoton);
            numeroEntero --;
            String numeroString = Integer.toString(numeroEntero);
            botones[3].setText(numeroString);
            int numeroCambio;
            for(int x=0;x<botones.length;x++){
              if(cont>0 && numerosAscendentes == true){
                 numerosAscendentes=true;
                 numeroCambio = numeroEntero - cont; 
                 numeroString = Integer.toString(numeroCambio);
                 botones[x].setText(numeroString);
                 cont=cont-1;
              }else{
                numerosAscendentes=false;
                numeroCambio = numeroEntero + cont;
                numeroString = Integer.toString(numeroCambio);
                botones[x].setText(numeroString);
                cont = cont +1;
              }
            }
            cont=3;
            numerosAscendentes=true;
            listaPoquemones(botones[3]);
        }
    }//GEN-LAST:event_btnPreviusActionPerformed

    private void btnNextActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnNextActionPerformed
        if(!botones[3].getBackground().equals(Color.MAGENTA)){
            btnPrevius.setEnabled(false);
            c++;
            if(c<=2){
              botones[b].setBackground(Color.WHITE);
            }else if(b<botones.length-1){
                b++;
                botones[b].setBackground(Color.WHITE);
            }
            if(a<botones.length-1){a++;}
            if (a == 4){
                a=3;
            }
            botones[a].setBackground(Color.MAGENTA);
            listaPoquemones(botones[a]);
        }else if(botones[6].getText().equals("65")){
          btnNext.setEnabled(false);
        }else{
            btnNext.setEnabled(true);
            btnPrevius.setEnabled(true);
            String numeroBoton = botones[3].getText();
            int numeroEntero = Integer.parseInt(numeroBoton);
            numeroEntero ++;
            String numeroString = Integer.toString(numeroEntero);
            botones[3].setText(numeroString);
            int numeroCambio;
            for(int x=0;x<botones.length;x++){
              if(cont>0 && numerosAscendentes == true){
                 numerosAscendentes=true;
                 numeroCambio = numeroEntero - cont; 
                 numeroString = Integer.toString(numeroCambio);
                 botones[x].setText(numeroString);
                 cont=cont-1;
              }else{
                numerosAscendentes=false;
                numeroCambio = numeroEntero + cont;
                numeroString = Integer.toString(numeroCambio);
                botones[x].setText(numeroString);
                cont = cont +1;
              }
            }
            cont=3;
            numerosAscendentes=true;
            listaPoquemones(botones[3]);
        }
    }//GEN-LAST:event_btnNextActionPerformed

    private void btnUltimaPaginaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnUltimaPaginaActionPerformed
        btnNext.setEnabled(false);
        btnPrevius.setEnabled(true);
        int y=59;
        for(int x=0;x<botones.length;x++){
         String numeroString = String.valueOf(y);
         botones[x].setText(numeroString);
         y++;
        }
    }//GEN-LAST:event_btnUltimaPaginaActionPerformed

    private void btnDescripcionActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnDescripcionActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_btnDescripcionActionPerformed

    public void paginador(){
        for(int b=0;b<botones.length;b++){
           botones[b].addActionListener(new ActionListener(){
            @Override
            public void actionPerformed(ActionEvent evt){
                JButton clickedButton =(JButton)evt.getSource();
                for (JButton button : botones) {
                    if (button != clickedButton) {
                        button.setBackground(Color.WHITE);
                    }
                }
                if(clickedButton.getText().equals("1")||clickedButton.getText().equals("2")||clickedButton.getText().equals("3") || clickedButton.getText().equals("4")){
                    clickedButton.setBackground(Color.MAGENTA);
                    listaPoquemones(clickedButton);
                    btnPrevius.setEnabled(false);
                }else if(clickedButton.getText().equals("62")||clickedButton.getText().equals("63")||clickedButton.getText().equals("64") || clickedButton.getText().equals("65")){
                    clickedButton.setBackground(Color.MAGENTA);
                    listaPoquemones(clickedButton);
                    btnNext.setEnabled(false);
                    }else{
                    btnPrevius.setEnabled(true);
                    btnNext.setEnabled(true);
                    String numeroBoton = clickedButton.getText();
                    int numeroEntero = Integer.parseInt(numeroBoton);
                    int numeroCambio;
                    botones[3].setText(numeroBoton);
                    botones[3].setBackground(Color.MAGENTA);
                    for(int x=0;x<botones.length;x++){
                      if(cont>0 && numerosAscendentes == true){
                         numerosAscendentes=true;
                         numeroCambio = numeroEntero - cont; 
                         String numeroString = Integer.toString(numeroCambio);
                         botones[x].setText(numeroString);
                         cont=cont-1;
                      }else{
                        numerosAscendentes=false;
                        numeroCambio = numeroEntero + cont;
                        String numeroString = Integer.toString(numeroCambio);
                        botones[x].setText(numeroString);
                        cont = cont +1;
                      }
                    }
                    cont=3;
                    numerosAscendentes=true;
                    listaPoquemones(botones[3]);
                }
            }
           });
           botones[b].setBackground(Color.WHITE);
        }
    }
    
    public void listaPoquemones(JButton boton){
        int numeroPagina;
        String numeroBoton = boton.getText();
        int numeroEntero = Integer.parseInt(numeroBoton);
        if(numeroEntero == 1){
            ponerImagenes(respAppi);
        }else{
            numeroPagina =numeroEntero-1;
            String url = consumoAPPI.consumoGET("https://digi-api.com/api/v1/digimon?page="+numeroPagina);
            ponerImagenes(url);
            panelPokemones.revalidate();
            panelPokemones.repaint();
        }
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btn1;
    private javax.swing.JButton btn2;
    private javax.swing.JButton btn3;
    private javax.swing.JButton btn4;
    private javax.swing.JButton btn5;
    private javax.swing.JButton btn6;
    private javax.swing.JButton btn7;
    private javax.swing.JButton btnDescripcion;
    private javax.swing.JButton btnNext;
    private javax.swing.JButton btnPrevius;
    private javax.swing.JButton btnPrimeraPagina;
    private javax.swing.JButton btnUltimaPagina;
    private javax.swing.JLabel etq1;
    private javax.swing.JLabel etq2;
    private javax.swing.JLabel etq3;
    private javax.swing.JLabel etq4;
    private javax.swing.JLabel etq5;
    private javax.swing.JLabel etqAtributos;
    private javax.swing.JLabel etqImagen;
    private javax.swing.JLabel etqNivel;
    private javax.swing.JLabel etqNombreDigimon;
    private javax.swing.JLabel etqTipo;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JPanel panelCampos;
    private javax.swing.JPanel panelCamposBatalla;
    private javax.swing.JPanel panelDetalle;
    private javax.swing.JPanel panelPaginador;
    private javax.swing.JPanel panelPokemones;
    private javax.swing.JPanel panelTitulo;
    // End of variables declaration//GEN-END:variables
}
