
import { useEffect, useRef } from 'react';

const NetworkGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match container
    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Define node colors
    const nodeColors = {
      center: '#3b82f6', // blue-500
      direct: '#3b82f6', // blue-500
      extended: '#8b5cf6', // purple-500
    };
    
    // Define node types and positions
    const nodes = [
      { id: 'you', type: 'center', x: canvas.width / 2, y: canvas.height / 2, radius: 30, label: 'You' },
      { id: 'alumni', type: 'direct', x: canvas.width / 2 - 100, y: canvas.height / 2 - 80, radius: 20, label: 'Alumni' },
      { id: 'colleagues', type: 'direct', x: canvas.width / 2 + 120, y: canvas.height / 2 - 70, radius: 20, label: 'Colleagues' },
      { id: 'mentors', type: 'direct', x: canvas.width / 2 - 20, y: canvas.height / 2 + 120, radius: 20, label: 'Mentors' },
      { id: 'industry', type: 'direct', x: canvas.width / 2 + 80, y: canvas.height / 2 + 100, radius: 20, label: 'Industry Peers' },
      { id: 'net1', type: 'extended', x: canvas.width / 2 - 180, y: canvas.height / 2 - 40, radius: 15, label: 'Network' },
      { id: 'net2', type: 'extended', x: canvas.width / 2 - 60, y: canvas.height / 2 - 150, radius: 15, label: 'Network' },
      { id: 'net3', type: 'extended', x: canvas.width / 2 + 80, y: canvas.height / 2 - 160, radius: 15, label: 'Network' },
      { id: 'net4', type: 'extended', x: canvas.width / 2 + 200, y: canvas.height / 2 - 20, radius: 15, label: 'Network' },
      { id: 'net5', type: 'extended', x: canvas.width / 2 + 180, y: canvas.height / 2 + 60, radius: 15, label: 'Network' },
      { id: 'net6', type: 'extended', x: canvas.width / 2 + 40, y: canvas.height / 2 + 180, radius: 15, label: 'Network' },
      { id: 'net7', type: 'extended', x: canvas.width / 2 - 100, y: canvas.height / 2 + 160, radius: 15, label: 'Network' },
      { id: 'net8', type: 'extended', x: canvas.width / 2 - 160, y: canvas.height / 2 + 60, radius: 15, label: 'Network' },
    ];
    
    // Define connections between nodes
    const connections = [
      { from: 'you', to: 'alumni' },
      { from: 'you', to: 'colleagues' },
      { from: 'you', to: 'mentors' },
      { from: 'you', to: 'industry' },
      { from: 'alumni', to: 'net1' },
      { from: 'alumni', to: 'net2' },
      { from: 'colleagues', to: 'net3' },
      { from: 'colleagues', to: 'net4' },
      { from: 'colleagues', to: 'net5' },
      { from: 'mentors', to: 'net6' },
      { from: 'mentors', to: 'net7' },
      { from: 'industry', to: 'net8' },
    ];
    
    // Animation properties
    let animationFrame: number;
    let time = 0;
    
    // Draw nodes and connections
    const draw = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      connections.forEach(connection => {
        const sourceNode = nodes.find(node => node.id === connection.from);
        const targetNode = nodes.find(node => node.id === connection.to);
        
        if (sourceNode && targetNode) {
          ctx.beginPath();
          ctx.moveTo(sourceNode.x, sourceNode.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)'; // slate-300 with opacity
          ctx.lineWidth = 1.5;
          ctx.stroke();
          
          // Draw connection pulse
          const pulsePosition = (Math.sin(time * 0.05 + nodes.indexOf(sourceNode) * 0.5) + 1) / 2;
          const pulseX = sourceNode.x + (targetNode.x - sourceNode.x) * pulsePosition;
          const pulseY = sourceNode.y + (targetNode.y - sourceNode.y) * pulsePosition;
          
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
          ctx.fillStyle = sourceNode.type === 'center' ? nodeColors.center : 
                         (sourceNode.type === 'direct' ? nodeColors.direct : nodeColors.extended);
          ctx.fill();
        }
      });
      
      // Draw nodes
      nodes.forEach(node => {
        // Node shadow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fill();
        
        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        
        // Create gradient for node fill
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius
        );
        
        if (node.type === 'center') {
          gradient.addColorStop(0, '#60a5fa'); // blue-400
          gradient.addColorStop(1, '#2563eb'); // blue-600
        } else if (node.type === 'direct') {
          gradient.addColorStop(0, '#60a5fa'); // blue-400
          gradient.addColorStop(1, '#2563eb'); // blue-600
        } else {
          gradient.addColorStop(0, '#a78bfa'); // purple-400
          gradient.addColorStop(1, '#7c3aed'); // purple-600
        }
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw node glow effect
        const nodeGlow = (Math.sin(time * 0.05 + nodes.indexOf(node)) + 1) * 0.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 3 + nodeGlow * 2, 0, Math.PI * 2);
        ctx.fillStyle = node.type === 'center' ? 
                      'rgba(59, 130, 246, 0.2)' : // blue-500 with opacity
                      (node.type === 'direct' ? 
                        'rgba(59, 130, 246, 0.15)' : // blue-500 with lower opacity
                        'rgba(139, 92, 246, 0.15)'); // purple-500 with opacity
        ctx.fill();
        
        // Node label
        ctx.fillStyle = '#fff';
        ctx.font = `${node.type === 'center' ? 'bold ' : ''}${Math.max(10, node.radius / 2)}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.label, node.x, node.y);
      });
      
      time++;
      animationFrame = requestAnimationFrame(draw);
    };
    
    // Start animation
    draw();
    
    // Add subtle node movement to make the network feel alive
    const moveNodes = () => {
      nodes.forEach(node => {
        if (node.id !== 'you') { // Don't move the center node
          node.x += Math.sin(time * 0.02 + nodes.indexOf(node)) * 0.3;
          node.y += Math.cos(time * 0.02 + nodes.indexOf(node) * 0.7) * 0.3;
        }
      });
    };
    
    const moveInterval = setInterval(moveNodes, 50);
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationFrame);
      clearInterval(moveInterval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
};

export default NetworkGraph;
